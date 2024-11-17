import React from 'react';
import { RecurrenceProvider } from './context/RecurrenceContext';
import DatePickerInput from './components/DatePicker/DatePickerInput';
import RecurringOptions from './components/DatePicker/RecurringOptions';
import CustomizationOptions from './components/DatePicker/CustomizationOptions';
import CalendarPreview from './components/DatePicker/CalendarPreview';

const App = () => (
  <RecurrenceProvider>
    <div className="date-picker">
      <h1>Reusable Date Picker</h1>
      <DatePickerInput />
      <RecurringOptions />
      <CustomizationOptions />
      <CalendarPreview />
    </div>
  </RecurrenceProvider>
);

export default App;
