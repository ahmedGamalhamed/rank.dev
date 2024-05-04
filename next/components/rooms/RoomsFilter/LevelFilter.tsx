import React from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

interface levelsFilterProps {
  handleFilterChange: Function;
}

const levelsArray = Array.from({ length: 20 }, (_, i) => i + 1).map(
  (level) => ({
    label: `Level ${level}`,
    value: `${level}`,
  })
);

export default function LevelFilter({ handleFilterChange }: levelsFilterProps) {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Autocomplete
        variant="bordered"
        defaultItems={levelsArray}
        placeholder="Select level"
        className="max-w-xs"
        selectedKey={value}
        aria-label="adf"
        onSelectionChange={(key) => {
          setValue(key as string);
          //   setSelectedLevel(key as string);
          handleFilterChange('level', key as string);
        }}
      >
        {(item: { value: string; label: string }) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
