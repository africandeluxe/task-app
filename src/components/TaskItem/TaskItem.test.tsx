import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskItem from '.';

describe('TaskItem Component', () => {
  it('displays line-through when task is completed', async () => {
    const completedTask = { 
      id: 1, title: 
      'Test Task', 
      completed: true 
    };

    render(<TaskItem task={completedTask} onEdit={jest.fn()} onDelete={jest.fn()} onToggleComplete={jest.fn()} />);
  
    const textElement = await screen.findByText(completedTask.title);
    expect(textElement).toHaveClass('line-through');
  });

  it('toggles task completed state on checkbox click', async () => {
    let task = { 
      id: 1, 
      title: 'Test Task', 
      completed: false 
    };

    const onToggleComplete = jest.fn(() => {
      task = { ...task, completed: !task.completed };
    });

    const { rerender } = render(
      <TaskItem task={task} onEdit={jest.fn()} onDelete={jest.fn()} onToggleComplete={onToggleComplete} />
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.checked).toBeFalsy();
    fireEvent.click(checkbox); 

    expect(onToggleComplete).toHaveBeenCalledTimes(1);

    rerender(<TaskItem task={task} onEdit={jest.fn()} onDelete={jest.fn()} onToggleComplete={onToggleComplete} />);

    expect(checkbox.checked).toBeTruthy();
    
    const textElement = await screen.findByText(task.title);
    expect(textElement).toHaveClass('line-through');
  });
});