'use client';

import { Chip, select } from '@nextui-org/react';

export default function TechnologyChip({
  filters,
  handleFilterChange,
}: {
  handleFilterChange: Function;
  filters: { query: string; level: string; technology: string[] };
}) {
  const handleClose = (technologyToRemove: string) => {
    handleFilterChange(
      'technology',
      filters?.technology.filter(
        (technology: string) => technology !== technologyToRemove
      )
    );
  };
  return (
    <div className="flex gap-2">
      {filters.technology.map((tech: string, index: number) => (
        <Chip key={index} onClose={() => handleClose(tech)} variant="flat">
          {tech}
        </Chip>
      ))}
    </div>
  );
}
