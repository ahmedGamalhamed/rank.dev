'use client';

import { useState } from 'react';
import LevelsFilter from './RoomsFilter/LevelFilter';
import SearchRoom from './RoomsFilter/SearchRoom';
import TechnologyChip from './RoomsFilter/TechnologyChip';
import TechnologyFilter from './RoomsFilter/TechnologyFilter';

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
    </div>
  );
}
