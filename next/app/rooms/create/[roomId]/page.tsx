'use client';
import { useProtect } from '@/lib/useProtect';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import useJoinRoom from '../../[roomId]/components/actions/useJoinRoom';
import ErrorMsg from '@/components/ErrorMsg';
import { getCallClient } from '../../getCallClient';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { roomId: string } }) {
  const pathname = usePathname();
  const router = useRouter();
  const { roomId } = params;
  const dialog = useProtect(pathname);
  const { joinError, joinData } = useJoinRoom(roomId);
  const { user } = useUser();

  useEffect(() => {
    if (typeof window == 'undefined') return;
    if (user) {
      const { call } = getCallClient(
        {
          fullName: user.fullName!,
          imageUrl: user.imageUrl,
          userId: user.id,
        },
        roomId
      );
      call
        .create()
        .then((e) => {
          router.push(`/rooms/${roomId}`);
        })
        .catch((e) => null);
    }
  }, [user]);

  if (dialog) return dialog;
  if (joinError) return <ErrorMsg msg={joinError} />;

  return (
    <main className="h-screen grid place-content-center">
      <ErrorMsg msg="Please wait while we are creating your room..." />
    </main>
  );
}
