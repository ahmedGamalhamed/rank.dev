import Link from 'next/link';
import React from 'react';
import { IJoinRoomResponse } from '../page';

export default function RoomInfo({ info }: { info: IJoinRoomResponse | null }) {
  return (
    <div className="col-span-1 mb-2 row-span-2 whitespace-break-spaces">
      <div className="text-2xl mb-1">
        <span className="text-fuchsia-500 text-sm mr-2">
          {info?.roomInfo.roomData.roomLevel}
        </span>
        {info?.roomInfo.roomData.roomName}
      </div>
      {info?.roomInfo.roomData.repo && (
        <Link
          href={info?.roomInfo.roomData.repo}
          className="text-sm text-gray-300 underline hover:text-white"
        >
          Join the repo
        </Link>
      )}
      <div>{info?.roomInfo.roomData.tags}</div>
    </div>
  );
}
