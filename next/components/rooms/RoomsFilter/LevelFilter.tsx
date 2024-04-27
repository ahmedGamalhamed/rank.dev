'use client';

import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import React from 'react';

const levels = ['level 1', 'level 2', 'level 3', 'level 4'];

export default function LevelsFilter() {
  return (
    <div>
      <Autocomplete
        aria-label="Select Level"
        placeholder="Select Level"
        className="w-56"
        defaultItems={levels}
      >
        {levels.map((level) => (
          <AutocompleteItem key={level} value={level}>
            {level}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
