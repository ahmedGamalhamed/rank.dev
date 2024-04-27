import Image from 'next/image';
import React from 'react';

type Owner = {
  name: string;
  avatarUrl: string;
};

type Props = {
  owner: Owner;
  targetRank: number;
  description: string;
  tags: React.ReactNode;
  participants: React.ReactNode;
  joinBtn: React.ReactNode;
};

const RoomCard = ({
  owner,
  targetRank,
  description,
  tags,
  participants,
  joinBtn,
}: Props) => {
  return (
    <div className="bg-[hsl(var(--card))] drop-shadow-md rounded max-w-[300px] min-w-[300px] p-5 dark:border-none border-solid border border-gray-200">
      <div className="header">
        <header className="flex items-center gap-4">
          <div className="image">
            <Image
              src={owner.avatarUrl}
              alt={owner.name}
              className="rounded-full"
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex">
            <h5 className="inline-flex pr-3 font-bold">{owner.name}</h5>
            <div className="inline-flex gap-2 items-center">
              <span className="text-sm italic text-[hsl(var(--muted-foreground))]">
                Level {targetRank}
              </span>
              <span>
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
              </span>
            </div>
          </div>
        </header>
        <div className="text-[hsl(var(--muted-foreground))] text-center flex justify-center text-sm gap-1 mt-4">
          {tags}
        </div>
      </div>
      <div className="description text-[hsl(var(--muted-foreground))] py-6">
        {description}
      </div>
      <div className="participants flex justify-center items-center gap-3 mb-3">
        {participants}
      </div>
      <div className="cta text-center">{joinBtn}</div>
    </div>
  );
};

export default RoomCard;
