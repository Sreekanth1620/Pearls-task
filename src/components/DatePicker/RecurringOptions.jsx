import React from 'react';
import { useRecurrence } from '../../context/RecurrenceContext';

const RecurringOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const frequencies = ['daily', 'weekly', 'monthly', 'yearly'];

  const handleFrequencyChange = (e) => {
    setRecurrence(prev => ({ ...prev, frequency: e.target.value }));
  };

  return (
    <div className="recurring-options">
      <label>Recurrence Pattern:</label>
      <select value={recurrence.frequency} onChange={handleFrequencyChange}>
        {frequencies.map((freq) => (
          <option key={freq} value={freq}>{freq}</option>
        ))}
      </select>
    </div>
  );
};

export default RecurringOptions;
