import React from 'react';

interface FilterProps {
  filter: string,
  onFilterChange: (filter: string) => void
}

const Filter: React.FC<FilterProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <button onClick={() => onFilterChange('all')} className={`px-4 py-2 ${filter === 'all' ? 'bg-accentMustard' : ''}`}>All</button>
      <button onClick={() => onFilterChange('completed')} className={`px-4 py-2 ${filter === 'completed' ? 'bg-accentMustard' : ''}`}>Completed</button>
      <button onClick={() => onFilterChange('incomplete')} className={`px-4 py-2 ${filter === 'incomplete' ? 'bg-accentMustard' : ''}`}>Incomplete</button>
    </div>
  );
};

export default Filter;