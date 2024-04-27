import Image from 'next/image';
import React from 'react';

type Participant = {
  id: string;
  name: string;
  avatarUrl: string;
};

type Props = {
  participants: Participant[];
};

const Participants = ({ participants }: Props) => {
  const participantsAvatars = participants.map((participant) => {
    return (
      <div key={participant.id} className="mb-3">
        <Image
          src={participant.avatarUrl}
          alt={participant.name}
          className="rounded-full"
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  });

  if (participantsAvatars.length < 3) {
    const emptyParticipants = 3 - participantsAvatars.length;
    for (let i = 0; i < emptyParticipants; i++) {
      participantsAvatars.push(
        <div
          key={i}
          className="mb-3 w-[40px] h-[40px] border-2 border-[#5046e5] border-dashed rounded-full"
        ></div>
      );
    }
  }

  return <>{participantsAvatars}</>;
};

export default Participants;
