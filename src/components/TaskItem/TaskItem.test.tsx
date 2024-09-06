import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskItem from '../TaskItem';

const task = { id: 1, title: 'Test Task', completed: false };
const onEdit = jest.fn();
const onDelete = jest.fn();
const onToggleComplete = jest.fn();

describe('TaskItem Component', () => {
  beforeEach(() => {
    render(<TaskItem task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
  });

  it('toggles task completed state on checkbox click', () => {
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onToggleComplete).toHaveBeenCalledWith(task.id);
  });

  it('calls onEdit when edit button is clicked', () => {
    fireEvent.click(screen.getByText(/edit/i));

    expect(onEdit).toHaveBeenCalledWith(task.id);
  });

  it('calls onDelete when delete button is clicked', () => {
    fireEvent.click(screen.getByText(/delete/i));

    expect(onDelete).toHaveBeenCalledWith(task.id);
  });


it('shows line-through style for completed tasks', async () => {
  const task = { id: 1, title: 'Test Task', completed: true }; 

  render(<TaskItem task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
  
  const span = screen.getByText(task.title);
  expect(span).toHaveStyle('text-decoration: line-through');
});

});