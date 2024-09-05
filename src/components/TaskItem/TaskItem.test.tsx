import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskItem from '../TaskItem';

describe('TaskItem Component', () => {
  const task = { id: 1, title: 'Test Task', completed: false };
  const onEdit = jest.fn();
  const onDelete = jest.fn();
  const onToggleComplete = jest.fn();

  it('toggles task completed state on checkbox click', () => {
    render(<TaskItem task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onToggleComplete).toHaveBeenCalledWith(task.id);
  });

  it('calls onEdit when edit button is clicked', () => {
    render(<TaskItem task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    
    fireEvent.click(screen.getByText(/edit/i));

    expect(onEdit).toHaveBeenCalledWith(task.id);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TaskItem task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    
    fireEvent.click(screen.getByText(/delete/i));
    
    expect(onDelete).toHaveBeenCalledWith(task.id);
  });
});