"use client";
import React from 'react';
import TaskItem from '../TaskItem';
import { Task } from '@/utils/types';

interface TaskListProps {
  tasks: Task[],
  onEdit: (id: number, newTitle: string) => void,
  onDelete: (id: number) => void,
  onToggleComplete: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;