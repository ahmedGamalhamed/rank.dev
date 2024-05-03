'use client';
import { _IRoom } from '@/app/rooms/[roomId]/components/actions/useRoomsData';
import { Input } from '@nextui-org/react';
import React, { useState } from 'react';

export default function SearchRoom({
  handleFilterChange,
}: {
  handleFilterChange: Function;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
    handleFilterChange('query', e.target.value);
  };

  return (
    <div className="w-full">
      <Input
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        className="w-full"
        type="text"
        placeholder="Search for user..."
        endContent={
          <svg
            stroke="#8e8e8e"
            fill="#8e8e8e"
            viewBox="0 0 512 512"
            aria-hidden="true"
            className="stroke-current text-purple-100 z-30"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        }
      />
    </div>
  );
}
