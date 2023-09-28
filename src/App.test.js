import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingFrom";
import BookingPage from "./components/BookingPage";
import { MemoryRouter as Router } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  const handleDispatch = jest.fn();
  render(
    <Router>
      <BookingForm availableTimes={[]} dispatch={handleDispatch} />
    </Router>
  );
  const headingElement = screen.getByText("Book now!");
  expect(headingElement).toBeInTheDocument();
});

test("renders BookingForm", () => {
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  const availableTimes = ["10-00", "11-00", "12-00"];

  render(
    <Router>
      <BookingForm
        onFormSubmit={mockOnFormSubmit}
        isFormSubmitted={false}
        availableTimes={availableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
      />
    </Router>
  );

  const dateLabel = screen.getByText(/Date/i);
  expect(dateLabel).toBeInTheDocument();
});

it("bookingForm works as expected", () => {
  const handleSubmit = jest.fn();
  const times = ["10-00", "11-00", "12-00"];
  const handleDispatch = jest.fn();
  render(
    <Router>
      <BookingForm
        availableTimes={times}
        dispatch={handleDispatch}
        onSubmit={handleSubmit}
      />
    </Router>
  );
  const dateInput = screen.getByLabelText("Choose date:");
  fireEvent.change(dateInput, { target: { value: "2023-06-01" } });
  const timeSelect = screen.getByLabelText("Choose time:");
  fireEvent.change(timeSelect, { target: { value: "10-00" } });
  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: 2 } });
  const occasion = screen.getByLabelText("Occasion");
  fireEvent.change(occasion, { target: { value: "Birthday" } });
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(dateInput.value).toBe("2023-06-01");
  expect(timeSelect.value).toBe("10-00");
  expect(occasion.value).toBe("Birthday");
  expect(guestsInput.value).toBe("2");
});
