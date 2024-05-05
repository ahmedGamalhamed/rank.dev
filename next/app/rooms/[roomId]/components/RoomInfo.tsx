import Link from 'next/link';
import React from 'react';
import { _IRoom } from './actions/useRoomsData';
import User from './User';

export default function RoomInfo({ info }: { info: _IRoom | null }) {
  if (!info) return null;
  const {
    roomInfo: { ownerId, ownerFullName, ownerImageUrl },
  } = info;
  return (
    <div className="col-span-1 mb-2 row-span-2 whitespace-break-spaces">
      <div className="text-2xl flex justify-between py-2">
        <div className="flex justify-center gap-1">
          <div>
            <User
              user={{
                fullName: '',
                id: ownerId,
                imageUrl: ownerImageUrl,
              }}
            />
          </div>
          <span>{info?.roomInfo.roomData.roomName}</span>
        </div>
        <span className="text-fuchsia-500 text-sm mr-2">
          <span>Level: </span> {info?.roomInfo.roomData.roomLevel}
        </span>
      </div>
      {info?.roomInfo.roomData.repo && (
        <Link
          href={info?.roomInfo.roomData.repo}
          className="text-sm text-gray-300 underline hover:text-white"
        >
          Join the repo
        </Link>
      )}
      <div className="px-4 mt-2">{info?.roomInfo.roomData.tags}</div>
    </div>
  );
}
