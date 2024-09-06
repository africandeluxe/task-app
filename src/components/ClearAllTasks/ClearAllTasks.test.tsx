import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ClearAllTasks from '../ClearAllTasks';

describe('ClearAllTasks Component', () => {
  it('calls onClearAll when the button is clicked', () => {
    const onClearAll = jest.fn();
    render(<ClearAllTasks onClearAll={onClearAll} />);

    const button = screen.getByText('Clear All Tasks');
    fireEvent.click(button);

    expect(onClearAll).toHaveBeenCalled();
  });
});