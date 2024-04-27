import React from 'react';

type Props = {
  roomId: number;
  isFull: boolean;
};

const JoinButton = ({ roomId, isFull }: Props) => {
  return (
    <button
      className={`${
        isFull
          ? 'bg-[hsl(var(--muted))]'
          : 'bg-gradient-to-tl from-30% from-[#4e059d] to-[#5046e5] bg-[#5046e5]'
      } gap-3 rounded-3xl font-medium text-l py-1 px-12 text-center text-white inline-flex`}
    >
      {isFull ? 'Full' : 'Join'}
    </button>
  );
};

export default JoinButton;
