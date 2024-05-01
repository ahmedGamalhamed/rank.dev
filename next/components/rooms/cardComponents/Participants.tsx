import Image from 'next/image';
import React from 'react';

type Participant = {
  authId: string;
  fullName: string;
  imageUrl: string;
};

type Props = {
  participants: Participant[];
  maximumParticipants: number;
};

const Participants = ({ participants, maximumParticipants }: Props) => {
  const participantsAvatars = participants.map((participant) => {
    return (
      <div key={participant.authId} className="mb-3">
        <Image
          src={participant.imageUrl}
          alt={participant.fullName}
          className="rounded-full"
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  });

  if (participants.length < maximumParticipants) {
    const emptyParticipants = maximumParticipants - participants.length;
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
