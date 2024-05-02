import React from 'react';
import { UserModel } from '../(db)/Schema';

export default async function page() {
  const u = await UserModel.findOneAndUpdate(
    { authId: 'user_2ffvpd7Uha7wZuHwLYXKcnZcOME' },
    {
      socials: {
        $set: {
          twitter: 'ahmed',
          facebook: 'facebook',
        },
      },
    }
  );
  console.log(u);
  return <div>page</div>;
}
