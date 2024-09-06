import React, { useState } from 'react';

interface DueDateProps {
  dueDate: string,
  onDateChange: (date: string) => void
}

const DueDate: React.FC<DueDateProps> = ({ dueDate, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(dueDate);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    onDateChange(e.target.value);
  };

  return (
    <input type="date" value={selectedDate} onChange={handleDateChange} className="border rounded p-2"/>
  );
};

export default DueDate;