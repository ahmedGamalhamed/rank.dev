'use server';

import { UserModel } from '../(db)/Schema';

export const getUserByAuthId = async (authId: string) => {
  if (!authId) return;
  const user = await UserModel.findOne({ authId });
  if (!user) return;
  const json = user?.toObject();
  return JSON.parse(JSON.stringify(json));
};

export const updateUserRanks = async (rank: string, idsArr: string[]) => {
  for await (let id of idsArr) {
    const user = await UserModel.findOne({ id });
    if (!user) return;
    const currentRank = user.problems_solved.get(rank) || 0;
    user?.problems_solved.set(rank, currentRank + 1);
    await user.save();
  }

  return true;
};
