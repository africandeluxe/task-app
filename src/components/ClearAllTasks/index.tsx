import React from 'react';

interface ClearAllTasksProps {
  onClearAll: () => void;
}

const ClearAllTasks: React.FC<ClearAllTasksProps> = ({ onClearAll }) => {
  return (
    <button onClick={onClearAll} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">Clear All Tasks</button>
  );
};

export default ClearAllTasks;