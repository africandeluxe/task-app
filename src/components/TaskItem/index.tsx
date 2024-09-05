import React from 'react';
import { Task } from '@/utils/types';

interface TaskItemProps {
  task: Task,
  onEdit: (id: number) => void,
  onDelete: (id: number) => void,
  onToggleComplete: (id: number) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <li className="bg-secondaryBg p-4 rounded-md flex justify-between items-center">
      <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} className="mr-2" />
      <span className={`text-primaryText cursor-pointer ${task.completed ? 'line-through' : ''}`} onClick={() => onToggleComplete(task.id)}>
        {task.title}
      </span>
      <div className="flex space-x-2">
        <button onClick={() => onEdit(task.id)} className="bg-accentMustard text-white px-3 py-1 rounded-md hover:bg-accentBrown">Edit</button>
        <button onClick={() => onDelete(task.id)} className="bg-accentTerra text-white px-3 py-1 rounded-md hover:bg-accentBrown">Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;