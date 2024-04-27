'use client';

import { useState } from 'react';
import LevelsFilter from './RoomsFilter/LevelFilter';
import SearchRoom from './RoomsFilter/SearchRoom';
import TechnologyChip from './RoomsFilter/TechnologyChip';
import TechnologyFilter from './RoomsFilter/TechnologyFilter';

export default function RoomLayout() {
  const [technologies, setTechnologies] = useState(['js', 'ts', 'React']);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-11 my-8">
        <div className="flex items-center justify-center gap-5">
          <TechnologyFilter
            technologies={technologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
          <LevelsFilter />
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
    </div>
  );
}
