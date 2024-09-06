'use client'
import React, { useState } from 'react';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import TaskCounter from '../TaskCounter';
import Filter from '../Filter';
import ClearAllTasks from '../ClearAllTasks';
import { Task } from '@/utils/types';

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false, dueDate: '' }]);
  };

  const editTaskTitle = (id: number, newTitle: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  const editTaskDueDate = (id: number, newDueDate: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, dueDate: newDueDate } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const filterTasks = (filter: string) => {
    setFilter(filter);
  };

  const getFilteredTasks = () => {
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'incomplete') return tasks.filter(task => !task.completed);
    return tasks;
  };

  return (
    <div className="bg-primaryBg p-6 rounded-md shadow-lg max-w-xl mx-auto">
      <h1 className="text-primaryText text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <Filter filter={filter} onFilterChange={filterTasks} />
      <TaskCounter totalTasks={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />
      <TaskList tasks={getFilteredTasks()} onEditTitle={editTaskTitle} onEditDueDate={editTaskDueDate} onDelete={deleteTask} onToggleComplete={toggleComplete} />
      <ClearAllTasks onClearAll={clearAllTasks} isDisabled={tasks.length === 0} />
    </div>
  );
};

export default TaskApp