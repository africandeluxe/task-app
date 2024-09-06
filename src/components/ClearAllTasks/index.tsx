import React from 'react';

interface ClearAllTasksProps {
  onClearAll: () => void,
  isDisabled: boolean
}

const ClearAllTasks: React.FC<ClearAllTasksProps> = ({ onClearAll, isDisabled }) => {
  return (
    <button onClick={onClearAll} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700" disabled={isDisabled}>Clear All Tasks</button>
  );
};

export default ClearAllTasks;