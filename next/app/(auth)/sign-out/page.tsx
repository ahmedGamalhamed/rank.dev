'use client';
import { socket } from '@/app/(socket)/socket';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    socket.emit('leaveRoom');
    router.push('/');
  }, []);

  return null;
}
