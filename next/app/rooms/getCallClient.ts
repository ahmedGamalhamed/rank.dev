import { StreamVideoClient } from '@stream-io/video-react-sdk';
import { generateTokenAction } from './[roomId]/components/actions/actions';

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;

export const getCallClient = (
  user: { userId: string; fullName: string; imageUrl: string },
  roomId: string
) => {
  const client = new StreamVideoClient({
    apiKey,
    user: {
      id: user.userId,
      name: user.fullName ?? undefined,
      image: user.imageUrl ?? undefined,
    },
    tokenProvider: () => generateTokenAction(),
  });
  const call = client.call('default', roomId);

  return { call, client };
};
