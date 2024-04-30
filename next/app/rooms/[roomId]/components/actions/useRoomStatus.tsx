'use client';
import { socket } from '@/app/(socket)/socket';
import React, { useEffect, useState } from 'react';

export interface IRoomStatus {
  count: number;
  clients: { id: string; fullName: string; imageUrl: string }[];
}

export function useRoomStatus() {
  const [status, setStatus] = useState<IRoomStatus | null>(null);

  useEffect(() => {
    socket.on('status', (data: IRoomStatus) => {
      console.log('status', data);
      setStatus(data);
    });

    return () => {
      socket.off('status');
    };
  }, []);

  return { status };
}
