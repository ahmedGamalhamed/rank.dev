'use client';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { useEffect, useRef, useState } from 'react';
import { generateTokenAction } from './actions/actions';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';
import ErrorMsg from '@/components/ErrorMsg';

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;

let sent = false;
let call: any;
let client: any;

const getCall = ({ userId, roomId, user }: any) => {
  if (sent) return { call, client };
  client = new StreamVideoClient({
    apiKey,
    user: {
      id: userId,
      name: user?.fullName ?? undefined,
      image: user?.imageUrl ?? undefined,
    },
    tokenProvider: () => generateTokenAction(),
  });
  call = client.call('default', roomId);
  sent = true;
  return { call, client };
};

export function VideoIO({ roomId }: { roomId: string }) {
  const { user } = useUser();
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!roomId || !userId) return;
    const { call, client } = getCall({ user, userId, roomId });
    call.join({ create: true });
    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch(console.error);
    };
  }, [roomId, userId]);

  if (!call || !client) return <ErrorMsg msg="Connecting..." />;

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls
            onLeave={() => {
              router.push('/');
            }}
          />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
