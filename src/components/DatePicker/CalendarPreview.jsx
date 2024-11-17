import React from 'react';
import { useRecurrence } from '../../context/RecurrenceContext';

const CalendarPreview = () => {
  const { recurrence } = useRecurrence();

  const generateRecurringDates = () => {
    const { frequency, interval, daysOfWeek, nthDayOfMonth, startDate, endDate } = recurrence;

    if (!startDate) return []; // Return early if no start date

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());
    const dates = [];

    while (start <= end) {
      if (frequency === 'daily' && (dates.length === 0 || dates.length % interval === 0)) {
        dates.push(new Date(start));
      } else if (frequency === 'weekly' && daysOfWeek.includes(start.getDay())) {
        dates.push(new Date(start));
      } else if (frequency === 'monthly' && nthDayOfMonth === start.getDate()) {
        dates.push(new Date(start));
      } else if (frequency === 'yearly' && start.getMonth() === 0 && start.getDate() === 1) {
        dates.push(new Date(start));
      }
      start.setDate(start.getDate() + 1); // Increment day by day
    }

    return dates.map(date => date.toISOString().split('T')[0]); // Format dates to YYYY-MM-DD
  };

  const recurringDates = generateRecurringDates();

  return (
    <div>
      <h2>Recurring Dates Preview</h2>
      {recurringDates.length > 0 ? (
        <ul>
          {recurringDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      ) : (
        <p>No dates available for the current recurrence settings.</p>
      )}
    </div>
  );
};

export default CalendarPreview;
