import React from 'react';
import { useRecurrence } from '../../context/RecurrenceContext';
import "./DatePicker.css"

const DatePickerInput = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleDateChange = (key, value) => {
    if (key === 'startDate' && new Date(value) > new Date(recurrence.endDate)) {
      alert('Start date cannot be after end date');
      return;
    }
    setRecurrence(prev => ({ ...prev, [key]: value }));
  };
  

  return (
    <div className="date-picker-input">
      <label>
        Start Date:
        <input
          type="date"
          value={recurrence.startDate || ''}
          onChange={(e) => handleDateChange('startDate', e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={recurrence.endDate || ''}
          onChange={(e) => handleDateChange('endDate', e.target.value)}
        />
      </label>
    </div>
  );
};

export default DatePickerInput;
