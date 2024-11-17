import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the full date picker application", () => {
  render(<App />);

  // Check if all subcomponents are present
  expect(screen.getByText(/Reusable Date Picker/i)).toBeInTheDocument();
  expect(screen.getByText(/Recurrence Pattern/i)).toBeInTheDocument();
  expect(screen.getByText(/Interval:/i)).toBeInTheDocument();
  expect(screen.getByText(/Recurring Dates:/i)).toBeInTheDocument();
});
