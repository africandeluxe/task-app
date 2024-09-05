import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCounter from '../TaskCounter';

describe('TaskCounter Component', () => {
  it('correctly displays the count of tasks', () => {
    render(<TaskCounter totalTasks={5} completedTasks={3} />);
    
    expect(screen.getByText('Total Tasks: 5')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 3')).toBeInTheDocument();
  });
});