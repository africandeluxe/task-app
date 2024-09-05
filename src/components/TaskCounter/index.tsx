import React from 'react';
import { TaskCounterProps } from '@/utils/types';

const TaskCounter: React.FC<TaskCounterProps> = ({ totalTasks, completedTasks }) => {
  return (
    <div>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
    </div>
  );
};

export default TaskCounter;