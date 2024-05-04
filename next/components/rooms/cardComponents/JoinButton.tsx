import React from 'react';

type Props = {
  roomId: string;
  isFull: boolean;
};

const JoinButton = ({ roomId, isFull }: Props) => {
  return (
    <button
      className={`${
        isFull
          ? 'dark:bg-[#ffffff] dark:text-[#222222] bg-[#222222] opacity-50 disabled-cursor pointer-events-none'
          : 'bg-gradient-to-tl from-30% bg-[#4F46E5] transform hover:scale-110 transition ease-in duration-300 '
      } gap-3 rounded-3xl font-medium text-l py-2 px-12 text-center text-white inline-flex`}
    >
      <a href={`/rooms/${roomId}`}>{isFull ? 'Full' : 'Join'}</a>
    </button>
  );
};

export default JoinButton;
