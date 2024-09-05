import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TaskList from '../TaskList';

describe('TaskList Component', () => {
  const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true }
  ];
  const onEdit = jest.fn();
  const onDelete = jest.fn();
  const onToggleComplete = jest.fn();

  it('renders all tasks', () => {
    render(<TaskList tasks={tasks} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(tasks.length);
  });

  it('interactions affect multiple items', () => {
    render(<TaskList tasks={tasks} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    fireEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(onToggleComplete).toHaveBeenCalledWith(2);
  });
});