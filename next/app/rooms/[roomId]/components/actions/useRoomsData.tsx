'use client';
import React, { useEffect, useState } from 'react';
import { IMessage } from '../../page';
import { socket } from '@/app/(socket)/socket';

interface _IRoom {
  id: string;
  messages: IMessage[];
  roomInfo: {
    ownerId: string;
    roomData: {
      roomName: string;
      roomDescription: string;
      repo: string;
      tags: string[];
      roomLevel: number;
      maximumParticipants: number;
    };
    id: string;
    createdAt: number;
  };
  participatns: Record<
    string,
    {
      authId: string;
      isAdmin: boolean;
      fullName: string;
      imageUrl: string;
      followers: any[];
      following: any[];
      technologies: any[];
      socials: any[];
      createdAt: Date;
      updatedAt: Date;
      id: string;
    }
  >;
}

export default function useRoomsData() {
  const [roomsData, setRoomsData] = useState<_IRoom | null>(null);

  useEffect(() => {
    socket.on('roomsData', (d) => {
      setRoomsData(d);
    });
    return () => {
      socket.off('roomsData');
    };
  }, []);

  return { roomsData };
}
