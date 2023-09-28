import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingFrom";
import userEvent from "@testing-library/user-event";

test("Renders the BookingForm heading", () => {
  const handleDispatch = jest.fn();
  render(<BookingForm availableTimes={[]} dispatch={handleDispatch} />);
  const headingElement = screen.getByText("Book now!");
  expect(headingElement).toBeInTheDocument();
});

describe("Renders correct times", () => {
  const handleDispatch = jest.fn();
  const initializeTimes = () => {
    return [["10-00", "11-00", "12-00"]];
  };
  const mockedOptions = initializeTimes();

  it("Renders correct initial times", () => {
    render(
      <BookingForm availableTimes={mockedOptions} dispatch={handleDispatch} />
    );
    expect(screen.getByRole("option", { name: "Choose time" }).selected).toBe(
      true
    );
  });

  it("should allow user to change time", () => {
    render(
      <BookingForm availableTimes={mockedOptions} dispatch={handleDispatch} />
    );

    userEvent.selectOptions(
      screen.getByLabelText("Choose time:"),
      screen.getByRole("option", { name: "10-00" })
    );
    expect(screen.getByRole("option", { name: "10-00" }).selected).toBe(true);
  });
});
