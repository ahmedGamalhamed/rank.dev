'use client';
import { socket } from '@/app/(socket)/socket';
import { IJoinRoomResponse } from '@/app/rooms/[roomId]/page';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function useJoinRoom(roomId: string) {
  const [joinError, setJoinError] = useState('');
  const [joinData, setJoinData] = useState<IJoinRoomResponse | null>(null);
  const { userId } = useAuth();

  useEffect(() => {
    if (!userId) return;
    socket.emit(
      'joinRoom',
      { roomId, userId },
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
  }, [userId, roomId]);

  return { joinError, joinData };
}
