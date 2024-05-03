'use server';

import { UserModel } from '@/app/(db)/Schema';
export const dynamic = 'force-dynamic';

export const getUsersInfo: () => Promise<{
  usersCount: number;
  paidUsers: number;
}> = async () => {
  const usersCount = await UserModel.countDocuments();
  const paidUsers = await UserModel.find({ paid: true });
  return { usersCount, paidUsers: paidUsers.length };
};
export const getUsers = async () => {
  const users = await UserModel.find();
  return JSON.parse(JSON.stringify(users.map((user) => user?.toObject())));
};
// export const getPaidUsers = async () => {
//   return count;
// };
