import React from 'react';
import User from './User';
import { useRoomStatus } from './actions/useRoomStatus';
import Link from 'next/link';

export default function Participants() {
  const { status } = useRoomStatus();

  return (
    <div>
      <h6 className="my-3">
        Participants:{' '}
        <span className="font-bold text-fuchsia-500 text-lg">
          {status?.count || 1}
        </span>
      </h6>
      <div className="pl-4">
        {status?.clients.map((id) => (
          <abbr key={id} title={id} className="no-underline">
            <Link href={''} className="participants">
              <User id={id} />
            </Link>
          </abbr>
        ))}
      </div>
    </div>
  );
}
