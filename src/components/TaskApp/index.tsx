"use client";
import React, { useState } from 'react';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import TaskCounter from '../TaskCounter';
import { Task } from '@/utils/types';

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const editTask = (id: number) => {
    const newTitle = prompt('Edit task title');
    if (newTitle) {
      setTasks(tasks.map(task => (task.id === id ? { ...task, title: newTitle } : task)));
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className="bg-primaryBg p-6 rounded-md shadow-lg max-w-xl mx-auto">
      <h1 className="text-primaryText text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskCounter totalTasks={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} onToggleComplete={toggleComplete} />
    </div>
  );
};

export default TaskApp;