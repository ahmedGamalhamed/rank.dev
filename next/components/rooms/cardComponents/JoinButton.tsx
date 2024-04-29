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
          : 'bg-gradient-to-tl from-30% from-[#4e059d] to-[#5046e5] bg-[#5046e5] transform hover:scale-110 transition ease-in duration-300 '
      } gap-3 rounded-3xl font-medium text-l py-1 px-12 text-center text-white inline-flex`}
    >
      {isFull ? 'Full' : 'Join'}
    </button>
  );
};

export default JoinButton;
