import React from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

interface levelsFilterProps {
  levels: { label: string; value: string }[];
  setLevels: Function;
}

export default function LevelFilter({ levels, setLevels }: levelsFilterProps) {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Autocomplete
        variant="bordered"
        defaultItems={levels}
        placeholder="Select level"
        className="max-w-xs"
        selectedKey={value}
        aria-label="adf"
        onSelectionChange={(key) => {
          setValue(key as string);
          setLevels(key as string);
        }}
      >
        {(item: { value: string; label: string }) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
