import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingPage from "../components/BookingPage";

test("renders the reservations component", () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );

  const reservation = screen.getByTestId("booking");
  expect(reservation).toBeInTheDocument();
});
