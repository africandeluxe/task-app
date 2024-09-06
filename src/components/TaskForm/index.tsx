"use client";
import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (inputValue.trim() === '' || inputValue.length > 100) {
      return;
    }
    onAddTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" placeholder="Enter task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border border-primaryText rounded-md bg-secondaryBg text-primaryText mb-2" />
      <button type="submit" className="w-full bg-accentTerra text-white p-2 rounded-md hover:bg-accentBrown">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;