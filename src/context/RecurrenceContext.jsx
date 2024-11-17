import React, { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    frequency: 'daily', // daily, weekly, monthly, yearly
    interval: 1,        // Every X days/weeks/months/years
    daysOfWeek: [],     // For weekly patterns
    nthDayOfMonth: null,
    startDate: new Date().toISOString().split('T')[0],
    // For monthly patterns
    endDate: null,
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
