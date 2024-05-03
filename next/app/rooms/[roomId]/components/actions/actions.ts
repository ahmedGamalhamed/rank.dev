'use server';

import { auth } from '@clerk/nextjs/server';
import { StreamChat } from 'stream-chat';

export async function generateTokenAction() {
  const user = auth();

  if (!user.sessionId) {
    throw new Error('No session found');
  }

  const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const api_secret = process.env.GET_STREAM_SECRET_KEY!;
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(user.userId);
  return token;
}
