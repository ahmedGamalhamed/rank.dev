import Image from 'next/image';
import React, { useEffect } from 'react';
import Participants from './cardComponents/Participants';
import JoinButton from './cardComponents/JoinButton';
import RoomTags from './cardComponents/RoomTags';
import { getUserByAuthId } from '@/app/actions/userActions';

type Props = {
  roomId: string;
  ownerId: string;
  ownerFullName: string;
  ownerImageUrl: string;
  targetRank: number;
  description: string;
  tags: string;
  participants: {
    authId: string;
    fullName: string;
    imageUrl: string;
  }[];
  maximumParticipants: number;
};

const RoomCard = ({
  roomId,
  ownerId,
  ownerFullName,
  ownerImageUrl,
  targetRank,
  description,
  tags,
  participants,
  maximumParticipants,
}: Props) => {
  // TODO: fetch user data

  const userName = ownerFullName;
  const userAvatar = ownerImageUrl;

  return (
    <div className="lg:mx-0 bg-[hsl(var(--card))] drop-shadow-md rounded-xl w-full  p-5 dark:border-none border-solid border border-gray-200 flex flex-col ">
      <div className="header">
        <header className="flex items-center gap-4">
          <div className="image">
            <Image
              src={userAvatar}
              alt={userName}
              className="rounded-full"
              width="30"
              height="30"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex justify-between">
            <h5 title="Ahmed Reda" className="inline-flex pr-3 text-[16px]">
              {userName?.length > 20
                ? `${userName?.slice(0, 20)}...`
                : `${userName}`}
            </h5>
            <div className="inline-flex gap-2 items-center">
              <span className="text-sm italic text-[hsl(var(--muted-foreground))]">
                Level {targetRank}
              </span>
            </div>
          </div>
        </header>
        <div className="text-[hsl(var(--muted-foreground))] text-center flex text-sm gap-1 mt-2">
          <RoomTags tags={tags} />
        </div>
      </div>
      <div
        className="description text-[hsl(var(--card-foreground))] text-md text-ellipsis h-24 my-6 line-clamp-4"
        title={description}
      >
        {description}
      </div>
      <div className="participants flex items-center gap-3 mb-3 pl-[20px]">
        <Participants
          participants={participants}
          maximumParticipants={maximumParticipants}
        />
      </div>
      <div className="cta text-center">
        <JoinButton
          roomId={roomId}
          isFull={participants.length >= maximumParticipants}
        />
      </div>
    </div>
  );
};

export default RoomCard;
