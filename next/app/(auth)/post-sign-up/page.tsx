import { UserModel } from '@/app/(db)/Schema';
import ErrorMsg from '@/components/ErrorMsg';
import { useUser } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Page() {
  const user = await currentUser();
  if (!user) redirect('/');

  const { fullName, imageUrl, id } = user;

  const dbUser = await UserModel.findOne({
    authId: id,
  });

  if (dbUser) return redirect('/');

  await UserModel.create({
    authId: id,
    fullName,
    imageUrl,
  });

  return redirect('/');
}
