'use client';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import {
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
} from '@stream-io/video-react-sdk';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorMsg from '@/components/ErrorMsg';
import { getCallClient } from '../../getCallClient';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import Participants from './Participants';
import { useRoomStatus } from './actions/useRoomStatus';
import User from './User';
import { Trash } from 'lucide-react';
import useRoomsData, { _IRoom } from './actions/useRoomsData';
import useJoinRoom from './actions/useJoinRoom';
import { socket } from '@/app/(socket)/socket';

export function VideoIO({ roomData }: { roomData: _IRoom | null }) {
  const [client, setClient] = useState<any>(null);
  const [call, setCall] = useState<any>(null);
  const router = useRouter();
  const { signedUser } = useGlobalContext();

  useEffect(() => {
    if (!roomData || !signedUser || !signedUser.id) return;
    if (typeof window == 'undefined') return;

    const { call, client } = getCallClient(
      {
        fullName: signedUser?.fullName!,
        userId: signedUser.id,
        imageUrl: signedUser.imageUrl,
      },
      roomData.roomInfo.id
    );

    call.join();
    call.camera.disable();
    call.microphone.disable();
    setCall(call);
    setClient(client);
    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch(console.log);
    };
  }, [signedUser, roomData]);

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
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
