'use client';
import React, { useEffect, useState } from 'react';
import { IMessage } from '../../page';
import { socket } from '@/app/(socket)/socket';

export interface _IRoom {
  id: string;
  messages: IMessage[];
  roomInfo: {
    ownerId: string;
    ownerFullName: string;
    ownerImageUrl: string;
    roomData: {
      roomName: string;
      roomDescription: string;
      repo: string;
      tags: string;
      roomLevel: number;
      maximumParticipants: number;
    };
    id: string;
    createdAt: number;
  };
  participants: Record<
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

export default function useRoomsData(rooms: _IRoom[] = []) {
  const [roomsData, setRoomsData] = useState<_IRoom[] | null>(rooms);

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
