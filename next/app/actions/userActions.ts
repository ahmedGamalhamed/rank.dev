'use server';

import { UserModel } from '../(db)/Schema';
import { stripeClient } from '../(utils)/Stripe';

export const getOrCreateUser = async (currentUser: {
  authId: string;
  fullName: string | null;
  imageUrl: string | null;
  email: string;
}) => {
  if (!currentUser) return {};
  const { fullName, imageUrl, authId, email } = currentUser;

  let dbUser = await UserModel.findOne({
    authId,
  });

  if (dbUser) {
    if (!dbUser.email) {
      dbUser.email = email;
      dbUser = await dbUser.save();
    }
    return JSON.parse(JSON.stringify(dbUser?.toObject() || {}));
  }
  const createdUser = await UserModel.create({
    authId,
    fullName,
    imageUrl,
    email,
  });

  return JSON.parse(JSON.stringify(createdUser?.toObject() || {}));
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

export const checkUserPayment = async (email: string) => {
  const res = await stripeClient.customers.list({
    email,
  });

  const user = await UserModel.findOne({ email });

  if (res.data) {
    const sub = await stripeClient.subscriptions.list({
      customer: res.data[0].id,
    });

    if (sub.data) {
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
