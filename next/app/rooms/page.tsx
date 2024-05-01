import { auth } from '@clerk/nextjs/server';
import React, { use } from 'react';
import RoomCard from '@/components/rooms/RoomCard';
import RoomTags from '@/components/rooms/cardComponents/RoomTags';
import Participants from '@/components/rooms/cardComponents/Participants';
import JoinButton from '@/components/rooms/cardComponents/JoinButton';
import RoomLayout from '@/components/rooms/RoomLayout';

export default async function Page() {
  const { userId } = auth();

  if (!userId)
    return (
      <div>
        <h1>You must be signed in to create a room</h1>
      </div>
    );

  return (
    <section className="max-w-7xl mx-auto">
      <RoomLayout />
    </section>
  );
}
