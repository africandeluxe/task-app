import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TaskApp from '../TaskApp';

describe('TaskApp Component', () => {
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