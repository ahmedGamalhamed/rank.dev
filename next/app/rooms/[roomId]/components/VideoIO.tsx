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

export function VideoIO({ roomId }: { roomId: string }) {
  const { user } = useUser();
  const { userId } = useAuth();

  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      if (!roomId) return;
      if (!userId) {
        return;
      }
      const client = new StreamVideoClient({
        apiKey,
        user: {
          id: userId,
          name: user?.fullName ?? undefined,
          image: user?.imageUrl ?? undefined,
        },
        tokenProvider: () => generateTokenAction(),
      });
      const call = client.call('default', roomId);
      call.camera.disable();
      call.join({ create: true });
      setClient(client);
      setCall(call);

      return () => {
        call
          .leave()
          .then(() => client.disconnectUser())
          .catch(console.error);
      };
    } catch {}
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
