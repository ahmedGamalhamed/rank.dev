'use client';

import { Chip, select } from '@nextui-org/react';

export default function TechnologyChip({
  selectedTechnologies,
  setSelectedTechnologies,
}) {
  const handleClose = (technologyToRemove) => {
    setSelectedTechnologies(
      selectedTechnologies.filter(
        (technology) => technology !== technologyToRemove
      )
    );
  };
  return (
    <div className="flex gap-2">
      {selectedTechnologies.map((technology, index) => (
        <Chip
          key={index}
          onClose={() => handleClose(technology)}
          variant="flat"
        >
          {technology}
        </Chip>
      ))}
    </div>
  );
}
