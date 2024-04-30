'use client';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { socket } from '@/app/(socket)/socket';
import { IJoinRoomResponse } from '@/app/rooms/[roomId]/page';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function useJoinRoom(roomId: string) {
  const [joinError, setJoinError] = useState('');
  const [joinData, setJoinData] = useState<IJoinRoomResponse | null>(null);
  const { dbUser } = useGlobalContext();
  console.log(joinData);
  useEffect(() => {
    if (!dbUser) return;
    socket.emit(
      'joinRoom',
      { roomId, userId: dbUser!.id, user: dbUser },
      (response: { data: IJoinRoomResponse } | { error: string }) => {
        if ('data' in response) {
          setJoinData(response.data);
        } else if ('error' in response) {
          setJoinError(response.error);
        }
      }
    );
    return () => {
      socket.emit('leaveRoom');
    };
  }, [dbUser, roomId]);

  return { joinError, joinData };
}
