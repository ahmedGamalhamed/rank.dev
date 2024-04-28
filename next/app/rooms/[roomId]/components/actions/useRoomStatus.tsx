'use client';
import { socket } from '@/app/(socket)/socket';
import React, { useEffect, useState } from 'react';

interface IRoomStatus {
  count: number;
  clients: string[];
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
