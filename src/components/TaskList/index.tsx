"use client";
import React from 'react';
import TaskItem from '../TaskItem';
import { Task } from '@/utils/types';

interface TaskListProps {
  tasks: Task[],
  onEditTitle: (id: number, newTitle: string) => void,
  onEditDueDate: (id: number, newDueDate: string) => void,
  onDelete: (id: number) => void,
  onToggleComplete: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTitle, onEditDueDate, onDelete, onToggleComplete }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEditTitle={onEditTitle} onEditDueDate={onEditDueDate} onDelete={onDelete} onToggleComplete={onToggleComplete} />
      ))}
    </ul>
  );
};

export default TaskList;