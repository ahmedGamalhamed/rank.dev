'use server';
import { UserModel } from '@/app/(db)/Schema';

export const getUsersInfo = async () => {
  const usersCount = await UserModel.countDocuments();
  const paidUsers = await UserModel.find({ paid: true });
  return { usersCount, paidUsers: paidUsers.length };
};
export const getUsers = async () => {
  const users = await UserModel.find();
  return users;
};
// export const getPaidUsers = async () => {
//   return count;
// };
