import { auth } from '@clerk/nextjs/server';
import React, { use } from 'react';
import RoomCard from '@/components/rooms/RoomCard';
import RoomTags from '@/components/rooms/cardComponents/RoomTags';
import Participants from '@/components/rooms/cardComponents/Participants';
import JoinButton from '@/components/rooms/cardComponents/JoinButton';
import RoomLayout from '@/components/rooms/RoomLayout';

export default async function Page() {
  const { userId } = auth();

  if (!userId)
    return (
      <div>
        <h1>You must be signed in to create a room</h1>
      </div>
    );

  return (
    <section>
      <RoomLayout />
      <RoomCard
        owner={{
          name: 'Ahmed Reda',
          avatarUrl: '/images/user.png',
        }}
        targetRank={12}
        description="Write a Javascript function that takes an array of numbers and returns the sum of all the positive numbers in the array."
        tags={
          <RoomTags
            tags={[
              { name: 'JS', isFav: true },
              { name: 'React', isFav: false },
              { name: 'CPP', isFav: true },
            ]}
          />
        }
        participants={
          <Participants
            participants={[
              {
                id: '1',
                name: 'John Doe',
                avatarUrl: '/images/user2.png',
              },
              {
                id: '2',
                name: 'Smith Smith',
                avatarUrl: '/images/user2.png',
              },
            ]}
          />
        }
        // TODO: make if condition here to get the value of isFull
        joinBtn={<JoinButton roomId={2} isFull={false} />}
      />
    </section>
  );
}
