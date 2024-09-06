import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TaskApp from '../TaskApp';

describe('TaskApp Component', () => {
  it('allows multiple tasks to be added', () => {
    render(<TaskApp />);

    const input = screen.getByPlaceholderText('Enter task');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: 'Task 3' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();

    expect(screen.getByText('Total Tasks: 3')).toBeInTheDocument();
  });

  it('allows multiple tasks to be deleted', () => {
    render(<TaskApp />);

    const input = screen.getByPlaceholderText('Enter task');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: 'Task 3' } });
    fireEvent.click(addButton);

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();

    fireEvent.click(deleteButtons[1]);

    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();

    fireEvent.click(deleteButtons[2]);

    expect(screen.queryByText('Task 3')).not.toBeInTheDocument();

    expect(screen.getByText('Total Tasks: 0')).toBeInTheDocument();
  });

  it('adds a task and updates list and counter', async () => {
    render(<TaskApp />);

    const input = screen.getByPlaceholderText('Enter task');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Initial Task' } });
    fireEvent.click(addButton);
    
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    
    const editInput = screen.getByDisplayValue('Initial Task');
    fireEvent.change(editInput, { target: { value: 'Edited Task' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    await waitFor(() =>
      expect(screen.getByText('Edited Task')).toBeInTheDocument());   
  });
});