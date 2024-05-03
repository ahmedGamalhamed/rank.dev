'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { UserModel } from '../(db)/Schema';
import { stripeClient } from '../(utils)/Stripe';

export const getOrCreateUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  let dbUser = await UserModel.findOne({
    authId: user.id,
  });

  const userEmail = user.emailAddresses[0].emailAddress;

  if (dbUser) {
    if (!dbUser.email) {
      dbUser.email = userEmail;
      dbUser = await dbUser.save();
    }
    return JSON.parse(JSON.stringify(dbUser?.toObject() || {}));
  }
  const createdUser = await UserModel.create({
    authId: user.id,
    fullName: user.fullName,
    imageUrl: user.imageUrl,
    email: userEmail,
  });

  const userObj = createdUser?.toObject();

  return userObj ? JSON.parse(JSON.stringify(userObj)) : null;
};

export const getUserByAuthId = async (authId: string) => {
  if (!authId) return;
  const user = await UserModel.findOne({ authId });
  if (!user) return;
  const json = user?.toObject();
  return JSON.parse(JSON.stringify(json));
};

export const updateUserRanks = async (rank: number, idsArr: string[]) => {
  for await (let id of idsArr) {
    const user = await UserModel.findOne({ id });
    if (!user) return;
    const currentRank = user.problems_solved.get(rank) || 0;
    user?.problems_solved.set(rank, currentRank + 1);
    await user.save();
  }

  return true;
};

export const getUserById = async (id: string) => {
  return await UserModel.findOne({ _id: id });
};

export const checkUserPayment = async (email: string) => {
  const res = await stripeClient.customers.list({
    email,
  });

  const user = await UserModel.findOne({ email });

  if (res.data[0]) {
    const sub = await stripeClient.subscriptions.list({
      customer: res.data[0].id,
    });

    if (sub.data[0]) {
      const paid = sub.data[0].status == 'active';
      if (user) {
        user.paid = paid;
        await user.save();
      }
      return {
        ...JSON.parse(JSON.stringify(user?.toObject())),
        paid,
      };
    }
  }
  return JSON.parse(JSON.stringify(user?.toObject()));
};
export const editProfile = async (updateObject: any) => {
  try {
    const userUser = auth();
    const user = await UserModel.findOneAndUpdate(
      { authId: userUser.userId },
      updateObject,
      { new: true }
    );
    return JSON.parse(JSON.stringify(user?.toObject()));
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateUser = async (userId: string, updateObj: any) => {
  const update = await UserModel.findOneAndUpdate({ _id: userId }, updateObj);
  return !!update;
};
