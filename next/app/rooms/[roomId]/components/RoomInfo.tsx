import Link from 'next/link';
import React from 'react';
import { IJoinRoomResponse } from '../page';

export default function RoomInfo({ info }: { info: IJoinRoomResponse | null }) {
  return (
    <div className="col-span-1 mb-2 row-span-2">
      <div className="text-2xl"> Typescript help</div>
      <Link
        href={''}
        className="text-sm text-gray-300 underline hover:text-white"
      >
        Join the repo
      </Link>
    </div>
  );
}
