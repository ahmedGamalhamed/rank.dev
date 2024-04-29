'use client';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamCallProvider,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ErrorMsg from '@/components/ErrorMsg';
import { getCallClient } from '../../getCallClient';

export function VideoIO({ roomId }: { roomId: string }) {
  // const { user } = useUser();

  const user = {
    fullName: 'Ahmed',
    id: 'UUID',
    imageUrl: '',
  };

  const [client, setClient] = useState<any>(null);
  const [call, setCall] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!roomId || !user || !user.id) return;
    if (typeof window == 'undefined') return;

    const { call, client } = getCallClient(
      {
        fullName: user?.fullName!,
        userId: user!.id,
        imageUrl: user!.imageUrl,
      },
      roomId
    );

    call.join();
    call.camera.disable();
    setCall(call);
    setClient(client);

    return () => {
      try {
        if (call)
          call
            .leave()
            .then(() => client.disconnectUser())
            .catch(console.log);
      } catch (e) {}
    };
  }, [user, roomId, user]);

  if (!call || !client) return <ErrorMsg msg="Connecting..." />;

  if (typeof window == 'undefined') return null;

  return (
    <>
      <StreamVideo client={client}>
        <StreamTheme>
          <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls
              onLeave={() => {
                router.push('/rooms');
              }}
            />
            <div className="p-4">
              <CallParticipantsList onClose={() => {}} />
            </div>
          </StreamCall>
        </StreamTheme>
      </StreamVideo>
    </>
  );
}
