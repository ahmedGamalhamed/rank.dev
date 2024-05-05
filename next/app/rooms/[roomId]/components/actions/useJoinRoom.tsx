'use client';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { socket } from '@/app/(socket)/socket';
import { useEffect, useState } from 'react';
import { _IRoom } from './useRoomsData';
import { useRouter } from 'next/navigation';

export default function useJoinRoom(roomId: string) {
  const [joinError, setJoinError] = useState('');
  const [joinData, setJoinData] = useState<_IRoom | null>(null);
  const { signedUser } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (!signedUser) return;
    socket.emit(
      'joinRoom',
      { roomId, userId: signedUser!.id, user: signedUser },
      (response: { data: _IRoom } | { error: string }) => {
        if ('data' in response) {
          setJoinData(response.data);
        } else if ('error' in response) {
          setJoinError(response.error);
        }
      }
    );

    socket.on('roomClosed', (d) => {
      setJoinError('This Room Has Been Closed!, Redirecting in 3s');
      setTimeout(() => {
        router.push('/rooms');
      }, 3000);
    });

    return () => {
      socket.emit('leaveRoom');
      socket.off('roomClosed');
    };
  }, [signedUser, roomId]);

  return { joinError, joinData };
}
