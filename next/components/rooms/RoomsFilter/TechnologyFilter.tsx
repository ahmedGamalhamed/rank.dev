import React from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

interface TechnologyFilterProps {
  technologies: Array<{ value: string; label: string }>;
  selectedTechnologies: string[];
  setSelectedTechnologies: Function;
}

export default function TechnologyFilter({
  technologies,
  setSelectedTechnologies,
  selectedTechnologies,
}: TechnologyFilterProps) {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Autocomplete
        variant="bordered"
        defaultItems={technologies}
        placeholder="Search Technology"
        className="max-w-xs"
        selectedKey={value}
        aria-label="adf"
        disabledKeys={[...selectedTechnologies]}
        onSelectionChange={(key) => {
          setValue('');
          if (key != null) {
            setSelectedTechnologies((prev: string[]) => [...prev, key]);
          }
        }}
      >
        {(item: { value: string; label: string }) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
