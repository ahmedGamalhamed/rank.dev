'use server';

import { UserModel } from '../(db)/Schema';

export const getUserByAuthId = async (authId: string) => {
  const user = await UserModel.findOne({ authId });
  const json = user?.toObject();
  return JSON.parse(JSON.stringify(json));
};
