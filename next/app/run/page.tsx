import React from 'react';
import { UserModel } from '../(db)/Schema';

export default async function page() {
  const u = await UserModel.findOneAndUpdate(
    { authId: 'user_2ffvpd7Uha7wZuHwLYXKcnZcOME' },
    {
      $set: {
        socials: {
          twitter: 'ahmed',
          facebook: 'facebook',
        },
      },
    }
  );
  return <div>page</div>;
}
