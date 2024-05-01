'use client';
import React, { useState } from 'react';
import Tag from './Tag';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { User } from '@/app/(db)/Schema';

const RoomTags = ({ tags }: { tags: string }) => {
  const { dbUser }: any = useGlobalContext();
  const favorites = dbUser?.favorites || [];
  const tagsArray = tags.split(' ');

  const roomTags = tagsArray.map((tag) => {
    return <Tag dbUser={dbUser} favorites={favorites} tag={tag} key={tag} />;
  });
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 h-14 content-baseline items-start justify-start">
      {roomTags}
    </div>
  );
};

export default RoomTags;
