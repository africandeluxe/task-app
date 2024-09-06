import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import TaskList from '../TaskList';

const tasks = [ { 
  id: 1, 
  title: 'Task 1', 
  completed: false 
},
{ 
  id: 2, 
  title: 'Task 2', 
  completed: true 
}

];
const onEdit = jest.fn();
const onDelete = jest.fn();
const onToggleComplete = jest.fn();

describe('TaskList Component', () => {

beforeEach(() => {
  render(<TaskList tasks={tasks} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
});

afterEach(() => {
  cleanup();
});


  it('renders all tasks', () => {
    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(tasks.length);
  });

  it('interactions affect multiple items', () => {
    const checkboxes = screen.getAllByRole('checkbox');

    checkboxes.forEach(checkbox => fireEvent.click(checkbox));
    
    expect(onToggleComplete).toHaveBeenCalledTimes(tasks.length);
  });

  it('checks for no tasks scenario', () => {
    render(<TaskList tasks={[]} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    
    const list = screen.getByRole('list');

    expect(list).toBeEmptyDOMElement();
  });
});
