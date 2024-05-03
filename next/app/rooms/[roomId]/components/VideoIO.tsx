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
import ErrorMsg from '@/components/ErrorMsg';
import { getCallClient } from '../../getCallClient';
import { useGlobalContext } from '@/app/(context)/GlobalContext';

export function VideoIO({ roomId }: { roomId: string }) {
  const [client, setClient] = useState<any>(null);
  const [call, setCall] = useState<any>(null);
  const router = useRouter();
  const { signedUser } = useGlobalContext();

  useEffect(() => {
    if (!roomId || !signedUser || !signedUser.id) return;
    if (typeof window == 'undefined') return;

    const { call, client } = getCallClient(
      {
        fullName: signedUser?.fullName!,
        userId: signedUser.id,
        imageUrl: signedUser.imageUrl,
      },
      roomId
    );

    call.join();
    call.camera.disable();
    setCall(call);
    setClient(client);
    return () => {
      try {
        call
          .leave()
          .then(() => client.disconnectUser())
          .catch(console.log);
      } catch (e) {}
    };
  }, [signedUser, roomId]);

  if (!call || !client) return <ErrorMsg msg="Connecting..." />;

  return (
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
  );
}
