'use client';

import { useState } from 'react';
import LevelsFilter from './RoomsFilter/LevelFilter';
import SearchRoom from './RoomsFilter/SearchRoom';
import TechnologyChip from './RoomsFilter/TechnologyChip';
import TechnologyFilter from './RoomsFilter/TechnologyFilter';
import RoomCard from './RoomCard';
import { Rooms } from '@/rooms-data';
import RoomTags from './cardComponents/RoomTags';
import Participants from './cardComponents/Participants';
import JoinButton from './cardComponents/JoinButton';

export default function RoomLayout() {
  const [technologies, setTechnologies] = useState([
    { label: 'js', value: 'js' },
    { label: 'react', value: 'react' },
  ]);

  const [levels, setLevels] = useState([
    { label: 'level 1', value: 'level 1' },
    { label: 'level 2', value: 'level 2' },
  ]);

  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-11 my-8">
        <div className="flex items-center justify-center gap-5">
          <TechnologyFilter
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
          <LevelsFilter levels={levels} setLevels={setLevels} />
        </div>
        <div>
          <SearchRoom />
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <TechnologyChip
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
      <div className="container flex">
        <div className=" rooms inline-flex flex-wrap justify-center gap-5 pb-5">
          {Rooms.map((room) => {
            return (
              <RoomCard
                key={room.id}
                owner={room.owner}
                targetRank={room.targetRank}
                description={room.description}
                tags={<RoomTags tags={room.tags} />}
                participants={
                  <Participants
                    participants={room.participants}
                    maximumParticipants={room.maximumParticipants}
                  />
                }
                joinBtn={
                  <JoinButton
                    roomId={room.id}
                    isFull={
                      room.participants.length >= room.maximumParticipants
                    }
                  />
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
