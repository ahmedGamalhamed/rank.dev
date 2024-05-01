import React, { use } from 'react';
import RoomLayout from '@/components/rooms/RoomLayout';
import { Variables } from '../Variables';

export default async function Page() {
  const rooms = await fetch(Variables.SOCKET_URL);
  const roomsData = await rooms.json();
  console.log();
  return (
    <section className="max-w-7xl mx-auto">
      <RoomLayout rooms={roomsData.data} />
    </section>
  );
}
