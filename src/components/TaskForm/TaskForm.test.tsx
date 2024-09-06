import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskForm from '../TaskForm';

describe('TaskForm Component', () => {
  const onAddTask = jest.fn();

  it('allows input to be entered and submitted', () => {
    render(<TaskForm onAddTask={onAddTask} />);
    const input = screen.getByPlaceholderText('Enter task');
    const button = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'New Task' } });

    fireEvent.click(button);
    
    expect(onAddTask).toHaveBeenCalledWith('New Task');
  });


  it('prevents empty task submission', () => {
    const onAddTask = jest.fn();
    render(<TaskForm onAddTask={onAddTask} />);
    
    const input = screen.getByPlaceholderText('Enter task');
    const button = screen.getByRole('button', { name: /add task/i });
  
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    
    expect(onAddTask).not.toHaveBeenCalled();
  });
});