import { auth } from '@clerk/nextjs/server';
import React from 'react';
import ChatForm from './ChatForm';

interface IProps {
  params: {
    roomId: string;
  };
}

export default function Page({ params }: IProps) {
  const { roomId } = params;
  const { userId } = auth();

  if (!userId) return <h1>You must be signed in to join chat</h1>;

  return (
    <section>
      <p>hello</p>
    </section>
  );
}
