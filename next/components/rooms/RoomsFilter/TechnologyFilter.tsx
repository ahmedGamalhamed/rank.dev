import React from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

interface TechnologyFilterProps {
  handleFilterChange: Function;
  filters: { query: string; level: string; technology: string[] };
}

const technologyArray = [
  { label: 'js', value: 'js' },
  { label: 'react', value: 'react' },
  { label: 'node', value: 'node' },
  { label: 'express', value: 'express' },
  { label: 'mongo', value: 'mongo' },
  { label: 'sql', value: 'sql' },
  { label: 'python', value: 'python' },
];

export default function TechnologyFilter({
  handleFilterChange,
  filters,
}: TechnologyFilterProps) {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Autocomplete
        variant="bordered"
        defaultItems={technologyArray}
        placeholder="Search Technology"
        className="max-w-xs"
        selectedKey={value}
        aria-label="adf"
        disabledKeys={[...filters.technology]}
        onSelectionChange={(key: any) => {
          setValue('');
          if (key != null) {
            handleFilterChange('technology', [...filters.technology, key]);
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
