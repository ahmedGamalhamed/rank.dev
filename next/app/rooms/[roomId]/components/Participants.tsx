'use client';
import React, { useState } from 'react';
import User from './User';
import { IRoomStatus, useRoomStatus } from './actions/useRoomStatus';
import { Switch } from '@/components/ui/switch';
import EndCallForm from './EndCallForm';
import { cn } from '@/lib/utils';
import { _IRoom } from './actions/useRoomsData';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { Trash, Trophy } from 'lucide-react';
import { socket } from '@/app/(socket)/socket';

export default function Participants({
  roomData,
}: {
  roomData: _IRoom | null;
}) {
  const { status } = useRoomStatus();
  const { signedUser } = useGlobalContext();
  const [toReward, setToReward] = useState<
    Record<string, IRoomStatus['clients'][0] | null>
  >({});

  if (!roomData) return null;

  return (
    <section>
      <div className="p-4">
        {/* <CallParticipantsList onClose={() => {}} /> */}
        <h4>Participants</h4>
        <div className="p-4 flex flex-col gap-2 ">
          <div className="flex justify-between items-center px-4 bg-black bg-opacity-5 rounded-lg">
            <User user={signedUser as any} />
          </div>
          {status?.clients.map((client) => {
            if (client.id == signedUser?.id) return null;
            return (
              <div
                key={client.id}
                className="flex justify-between items-center px-4 bg-black bg-opacity-5 rounded-lg"
              >
                <User user={client} />
                {signedUser?.id == roomData?.roomInfo.ownerId && (
                  <button
                    onClick={() => {
                      socket.emit('kickUser', {
                        userId: client.id,
                        roomId: roomData?.id,
                      });
                    }}
                    className="rounded-full hover:bg-white p-2 hover:scale-110 active:scale-100"
                  >
                    <Trash color="red" size={20} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {roomData &&
        roomData.roomInfo.ownerId == signedUser!.id &&
        status &&
        status.count > 1 && (
          <div>
            <h1 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <span className="text-yellow-500">
                <Trophy />
              </span>
              Reward
            </h1>
            <div className="">
              {status?.clients.map((client) => {
                if (client.id == roomData.roomInfo.ownerId) return null;
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
                          setToReward((prev) => ({
                            ...prev,
                            [client.id]: client,
                          }));
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
                  roomLevel={+roomData.roomInfo.roomData.roomLevel}
                  roomId={roomData.id}
                />
              </div>
            </div>
          </div>
        )}
    </section>
  );
}
