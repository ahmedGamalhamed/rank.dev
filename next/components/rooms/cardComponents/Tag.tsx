'use client';
import { updateUserFavorites } from '@/app/actions/userActions';
import React, { useEffect, useState } from 'react';
import { User } from '@/app/(db)/Schema';

const Tag = ({
  tag,
  favorites,
  dbUser,
}: {
  tag: string;
  favorites: string[];
  dbUser: User;
}) => {
  const [favorite, setFavorite] = useState<boolean | null>(() =>
    favorites.includes(tag)
  );

  useEffect(() => {
    if (favorite === null) return;
    updateUserFavorites(tag, favorite, dbUser);
  }, [favorite, tag, dbUser]);

  const handleFavorite = (e: any) => {
    if (!dbUser) return;
    else {
      setFavorite(!favorite);
    }
  };

  return (
    <div
      className="flex gap-2 items-center justify-center bg-gray-300 dark:bg-black dark:bg-opacity-50 rounded-xl py-[1px] px-3"
      key={tag}
    >
      <span className="text-[10px] text-black dark:text-white">{tag}</span>

      <div className="cursor-pointer" onClick={handleFavorite}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          stroke="#ffb100"
          fill={favorite ? '#ffb100' : 'none'}
          aria-hidden="true"
          strokeWidth="20"
          height="12"
          width="12"
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </div>
    </div>
  );
};

export default Tag;
