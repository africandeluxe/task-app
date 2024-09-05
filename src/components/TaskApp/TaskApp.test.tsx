import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskApp from '../TaskApp';

describe('TaskApp Component', () => {
  it('adds a task and updates list and counter', () => {
    render(<TaskApp />);
    const input = screen.getByPlaceholderText('Enter task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(screen.getByText('New Task')).toBeInTheDocument(); 
    expect(screen.getByText('Total Tasks: 1')).toBeInTheDocument();
  });
});