'use client';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { socket } from '@/app/(socket)/socket';
import { IJoinRoomResponse } from '@/app/rooms/[roomId]/page';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function useJoinRoom(roomId: string) {
  const [joinError, setJoinError] = useState('');
  const [joinData, setJoinData] = useState<IJoinRoomResponse | null>(null);
  const { signedUser } = useGlobalContext();

  useEffect(() => {
    if (!signedUser) return;
    socket.emit(
      'joinRoom',
      { roomId, userId: signedUser!.id, user: signedUser },
      (response: { data: IJoinRoomResponse } | { error: string }) => {
        if ('data' in response) {
          setJoinData(response.data);
        } else if ('error' in response) {
          setJoinError(response.error);
        }
      }
    );

    socket.on('roomClosed', (d) => {
      setJoinError('This Room Has Been Closed!');
    });

    return () => {
      socket.emit('leaveRoom');
      socket.off('roomClosed');
    };
  }, [signedUser, roomId]);

  return { joinError, joinData };
}
