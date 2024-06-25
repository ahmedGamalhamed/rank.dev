'use client';

import { use, useEffect, useMemo, useState } from 'react';
import LevelsFilter from './RoomsFilter/LevelFilter';
import SearchRoom from './RoomsFilter/SearchRoom';
import TechnologyChip from './RoomsFilter/TechnologyChip';
import TechnologyFilter from './RoomsFilter/TechnologyFilter';
import RoomCard from './RoomCard';
import useRoomsData, {
  _IRoom,
} from '@/app/rooms/[roomId]/components/actions/useRoomsData';

export default function RoomLayout({ rooms }: { rooms: _IRoom[] }) {
  const { roomsData } = useRoomsData(rooms);
  const [filteredRooms, setFilteredRooms] = useState<_IRoom[]>([]);

  const [filters, setFilters] = useState({
    query: '',
    level: '',
    followed: '',
    technology: [],
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    const applyFilters = () => {
      if (!roomsData) return;
      let filtered = roomsData;

      // Apply query filter
      if (filters.query) {
        filtered = filtered.filter((room) =>
          room.roomInfo.roomData.roomName
            .toLowerCase()
            .startsWith(filters.query.toLowerCase())
        );
      }

      // Apply level filter
      if (filters.level) {
        filtered = filtered.filter(
          (room) => room.roomInfo.roomData.roomLevel === parseInt(filters.level)
        );
      }

      if (filters.followed) {
        filtered = filtered.filter(
          (room) => room.roomInfo.ownerId == filters.followed
        );
      }

      // Apply tech filter
      if (filters.technology) {
        filtered = filtered.filter((room) => {
          const techs = room.roomInfo.roomData.tags
            .split(' ')
            .map((tag: string) => tag.toLowerCase());
          return filters.technology.every((tech) => techs.includes(tech));
        });
      }
      //@ts-ignore
      setFilteredRooms(filtered);
    };
    applyFilters();
  }, [filters, roomsData]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-11 my-8 px-3">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {/* technology filter */}
          <TechnologyFilter
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
          {/* level filter */}
          <LevelsFilter handleFilterChange={handleFilterChange} />
        </div>
        <div className=" w-full max-w-[520px] z-0">
          {/* search rooms bar */}
          <SearchRoom handleFilterChange={handleFilterChange} />
        </div>
      </div>

      <div className="flex justify-center  mb-8 min-h-[30px]">
        <TechnologyChip
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="min-h-[80vh]">
        <div className="px-3 rooms grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-auto gap-[10px] pb-5">
          {filteredRooms?.map((room: _IRoom) => {
            return (
              <RoomCard
                roomId={room.id}
                ownerFullName={room.roomInfo.ownerFullName ?? 'No Name'}
                ownerImageUrl={
                  room.roomInfo.ownerImageUrl ?? '/images/user.png'
                }
                key={room.id}
                ownerId={room.roomInfo.ownerId}
                targetRank={room.roomInfo.roomData.roomLevel}
                description={room.roomInfo.roomData.roomDescription}
                tags={room.roomInfo.roomData.tags}
                participants={
                  room.participants ? Object.values(room.participants) : []
                }
                maximumParticipants={room.roomInfo.roomData.maximumParticipants}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
