'use client';
import React, { useState } from 'react';
import User from './User';
import { IRoomStatus, useRoomStatus } from './actions/useRoomStatus';
import { Switch } from '@/components/ui/switch';
import EndCallForm from './EndCallForm';
import { cn } from '@/lib/utils';
import { IJoinRoomResponse } from '../page';

export default function Participants({
  roomInfo,
}: {
  roomInfo: IJoinRoomResponse;
}) {
  const { status } = useRoomStatus();
  const [toReward, setToReward] = useState<
    Record<string, IRoomStatus['clients'][0] | null>
  >({});

  return (
    <div>
      <h1 className="text-fuchsia-500 text-2xl font-bold mb-4">Reward</h1>
      <div className="">
        {status?.clients.map((client) => {
          if (client.id == roomInfo.roomInfo.ownerId) return null;
          return (
            <div
              className={`flex gap-8 items-center rounded-lg px-4 ${
                toReward[client.id]
                  ? 'bg-yellow-300 bg-opacity-10 transition-colors duration-300'
                  : ''
              }`}
              key={client.id}
            >
              <Switch
                name={client.id}
                checked={!!toReward[client.id]}
                onCheckedChange={(e) => {
                  if (e) {
                    setToReward((prev) => ({ ...prev, [client.id]: client }));
                  } else {
                    setToReward((prev) => {
                      return {
                        ...prev,
                        [client.id]: null,
                      };
                    });
                  }
                }}
              />
              <User user={client} />
            </div>
          );
        })}
        <div
          className={cn(
            Object.values(toReward).find((n) => n) ? '' : 'opacity-0',
            'duration-300 transition-all'
          )}
        >
          <EndCallForm
            usersToReward={toReward}
            roomLevel={+roomInfo.roomInfo.roomData.roomLevel}
          />
        </div>
      </div>
    </div>
  );
}
