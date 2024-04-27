'use client';

import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { useState } from 'react';

export default function TechnologyFilter({
  technologies,
  setSelectedTechnologies,
}: {
  technologies: string[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [value, setValue] = useState('');
  const handleValueChange = (selectedTechnology: string) => {
    setSelectedTechnologies((prevSelectedTechnologies: any) => [
      ...prevSelectedTechnologies,
      selectedTechnology,
    ]);
  };

  return (
    <div>
      <Autocomplete
        aria-label="Select Technology"
        placeholder="Select Technology"
        className="w-56"
        defaultItems={technologies}
        selectedKey={value}
        // onSelectionChange={(selectedTechnology) =>
        //   handleValueChange(selectedTechnology)
        // }
        onSelectionChange={(e) => {
          handleValueChange(e);
        }}
      >
        {technologies.map((technology) => (
          <AutocompleteItem key={technology} value={technology}>
            {technology}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
