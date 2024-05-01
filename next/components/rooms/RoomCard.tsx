import Image from 'next/image';
import React from 'react';
import Participants from './cardComponents/Participants';
import JoinButton from './cardComponents/JoinButton';
import RoomTags from './cardComponents/RoomTags';

type Props = {
  roomId: string;
  ownerId: string;
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
  targetRank,
  description,
  tags,
  participants,
  maximumParticipants,
}: Props) => {
  // TODO: fetch user data
  const userName = 'Ahmeed Reda';
  const userAvatar = '/images/user2.png';

  return (
    <div className="lg:mx-0 bg-[hsl(var(--card))] drop-shadow-md rounded-xl w-full  p-5 dark:border-none border-solid border border-gray-200 flex flex-col grow ">
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
              {userName.length > 20
                ? `${userName.slice(0, 20)}...`
                : `${userName}`}
            </h5>
            <div className="inline-flex gap-2 items-center">
              <span className="text-sm italic text-[hsl(var(--muted-foreground))]">
                Level {targetRank}
              </span>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  stroke="currentColor"
                  fill="#5046e5"
                  aria-hidden="true"
                  strokeWidth="0"
                  height="15"
                  width="15"
                >
                  <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
              </span> */}
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
      <div className="participants flex items-center gap-3 mb-3 mt-auto pl-[20px]">
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
