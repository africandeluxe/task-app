'use client'
import React, { useState } from 'react';
import DueDate from '../DueDate';
import { Task } from '@/utils/types';

interface TaskItemProps {
  task: Task,
  onEditDueDate: (id: number, newDueDate: string) => void,
  onEditTitle: (id: number, newTitle: string) => void,
  onDelete: (id: number) => void,
  onToggleComplete: (id: number) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEditDueDate, onEditTitle, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleDueDateChange = (newDueDate: string) => {
    onEditDueDate(task.id, newDueDate);
  };

  const handleEdit = () => {
    if (isEditing && newTitle !== task.title) {
      onEditTitle(task.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="bg-secondaryBg p-4 rounded-md flex justify-between items-center">
      <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} className="mr-2"/>
      {isEditing ? (
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="text-primaryText cursor-pointer"/>
      ) : (
        <span className={`text-primaryText cursor-pointer ${task.completed ? 'line-through' : ''}`}>
          {task.title}
        </span>
      )}
      <DueDate dueDate={task.dueDate} onDateChange={handleDueDateChange} />
      <div className="flex space-x-2">
        <button onClick={handleEdit} className="bg-accentMustard text-white px-3 py-1 rounded-md hover:bg-accentBrown">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDelete(task.id)} className="bg-accentTerra text-white px-3 py-1 rounded-md hover:bg-accentBrown">Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;