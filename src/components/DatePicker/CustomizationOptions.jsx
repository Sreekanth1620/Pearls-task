import React from 'react';
import { useRecurrence } from '../../context/RecurrenceContext';

const CustomizationOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleIntervalChange = (e) => {
    const value = Math.max(1, e.target.value);
    setRecurrence(prev => ({ ...prev, interval: value }));
  };
  

  const handleDaySelection = (day) => {
    setRecurrence(prev => ({
      ...prev,
      daysOfWeek: prev.daysOfWeek.includes(day)
        ? prev.daysOfWeek.filter(d => d !== day)
        : [...prev.daysOfWeek, day],
    }));
  };

  return (
    <div className="customization-options">
      <label>Interval:</label>
      <input
        type="number"
        min="1"
        value={recurrence.interval}
        onChange={handleIntervalChange}
      />
      {recurrence.frequency === 'weekly' && (
        <div>
          <label>Days of the Week:</label>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <button
              key={day}
              className={recurrence.daysOfWeek.includes(index) ? 'active' : ''}
              onClick={() => handleDaySelection(index)}
            >
              {day}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomizationOptions;
