import React from "react";
import { render, screen } from "@testing-library/react";
import { RecurrenceProvider } from "../../../context/RecurrenceContext";
import CalendarPreview from "../CalendarPreview";

test("generates and displays recurring dates", () => {
  render(
    <RecurrenceProvider>
      <CalendarPreview />
    </RecurrenceProvider>
  );

  expect(screen.getByText(/Recurring Dates:/)).toBeInTheDocument();

  // Assert that at least one recurring date is generated
  const dates = screen.getAllByRole("listitem");
  expect(dates.length).toBeGreaterThan(0);
});
