import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import TaskList from '../TaskList';

describe('TaskList Component', () => {
  afterEach(cleanup);
  
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


  it('renders all tasks', () => {
    render(<TaskList tasks={tasks} onEdit={jest.fn()} onDelete={jest.fn()} onToggleComplete={jest.fn()} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(tasks.length);
  });

  it('interactions affect multiple items', () => {
    render(<TaskList tasks={tasks} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);

    const checkboxes = screen.getAllByRole('checkbox');

    checkboxes.forEach(checkbox => fireEvent.click(checkbox));
    
    expect(onToggleComplete).toHaveBeenCalledTimes(tasks.length);
  });

  it('ensures checkboxes reflect task completion state', () => {
    render(<TaskList tasks={tasks} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
    
    expect(checkboxes[0].checked).toBe(false);
    expect(checkboxes[1].checked).toBe(true);
  });

  it('checks for no tasks scenario', () => {
    render(<TaskList tasks={[]} onEdit={jest.fn()} onDelete={jest.fn()} onToggleComplete={jest.fn()} />);
    const lists = screen.queryAllByRole('list'); 
    expect(lists).toHaveLength(1); 
    expect(lists[0]).toBeEmptyDOMElement(); 
  });
});