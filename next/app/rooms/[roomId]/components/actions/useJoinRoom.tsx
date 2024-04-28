'use client';
import { socket } from '@/app/(socket)/socket';
import { IJoinRoomResponse, IMessage } from '@/app/rooms/[roomId]/page';
import { useAuth, useUser } from '@clerk/nextjs';
import React, { useEffect, useRef, useState } from 'react';

export default function useJoinRoom(roomId: string) {
  const [joinError, setJoinError] = useState('');
  const [joinData, setJoinData] = useState<IJoinRoomResponse | null>(null);
  const { userId, isLoaded } = useAuth();
  const sent = useRef(false);

  useEffect(() => {
    if (!userId || !isLoaded) return;
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
  }, [userId]);

  return { joinError, joinData };
}
