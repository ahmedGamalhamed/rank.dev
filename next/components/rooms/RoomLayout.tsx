'use client';

import { useEffect, useState } from 'react';
import LevelsFilter from './RoomsFilter/LevelFilter';
import SearchRoom from './RoomsFilter/SearchRoom';
import TechnologyChip from './RoomsFilter/TechnologyChip';
import TechnologyFilter from './RoomsFilter/TechnologyFilter';
import RoomCard from './RoomCard';
import { Rooms } from '@/rooms-data';

export default function RoomLayout() {
  const [technologies, setTechnologies] = useState([
    { label: 'js', value: 'js' },
    { label: 'react', value: 'react' },
  ]);

  const [levels, setLevels] = useState([
    { label: 'Level 1', value: 'level 1' },
    { label: 'Level 2', value: 'level 2' },
  ]);

  const [selectedLevel, setSelectedLevel] = useState();

  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-11 my-8 px-3">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <TechnologyFilter
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
          <LevelsFilter levels={levels} setLevels={setSelectedLevel} />
        </div>
        <div className=" w-full max-w-[520px]">
          <SearchRoom />
        </div>
      </div>

      <div className="flex justify-center mb-8 min-h-[30px]">
        <TechnologyChip
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
      <div className="px-3 rooms grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-auto gap-[10px] pb-5">
        {Rooms.map((room) => {
          return (
            <RoomCard
              roomId={room.id}
              key={room.id}
              ownerId={room.roomInfo.ownerId}
              targetRank={room.roomInfo.roomData.roomLevel}
              description={room.roomInfo.roomData.roomDescription}
              tags={room.roomInfo.roomData.tags}
              participants={room.participants}
              maximumParticipants={room.roomInfo.roomData.maximumParticipants}
            />
          );
        })}
      </div>
    </div>
  );
}
