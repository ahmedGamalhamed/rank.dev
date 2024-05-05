import React, { use } from 'react';
import RoomLayout from '@/components/rooms/RoomLayout';
import { Variables } from '../Variables';

export const dynamic = 'force-dynamic';

export default async function Page() {
  let roomsData = { data: [] };
  try {
    const rooms = await fetch(Variables.SOCKET_URL);
    roomsData = await rooms.json();
  } catch (e) {}

  return (
    <section className="max-w-7xl mx-auto">
      <RoomLayout rooms={roomsData.data} />
    </section>
  );
}
