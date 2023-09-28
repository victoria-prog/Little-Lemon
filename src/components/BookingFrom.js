import React, { useState } from "react";
import "../css/bookingForm.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [bookingData, setBookingData] = useState({
    date: new Date(),
    time: availableTimes[0],
    guests: "",
    occasion: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const occasions = [
    { value: "Choose the occasion", text: "Choose the occasion" },
    { value: "Birthday", text: "Birthday" },
    { value: "Anniversary", text: "Anniversary" },
  ];

  const handleInputChange = (e) => {
    if (e.target.name === "date") {
      dispatch(e.target.value);
    }
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e, bookingData) => {
    e.preventDefault();
    const errors = validate(bookingData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    setIsFormSubmitted(true);
    navigate("/confirmed");
  };

  const validate = (bookingData) => {
    const errors = {};
    if (!bookingData.time) {
      errors.time = "Please choose time!";
    }
    if (!bookingData.guests) {
      errors.guests = "Please choose a number of guests";
    }
    if (!bookingData.occasion) {
      errors.occasion = "Please choose an occasion";
    }
    return errors;
  };

  return (
    <>
      <div className="reservation-box">
        <h3>Book now!</h3>
        <form onSubmit={(e) => handleFormSubmit(e, bookingData)}>
          <label htmlFor="res-date" className="booking-label">
            Choose date:{" "}
          </label>
          <input
            required
            className="form-control"
            type="date"
            placeholder="Choose the date"
            id="res-date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
          />
          <div className="group-label-input">
            <label htmlFor="res-time" className="booking-label">
              {errors.time ? (
                <span style={{ color: "red", fontSize: "15px" }}>
                  {errors.time}
                </span>
              ) : (
                "Choose time:"
              )}
            </label>

            <select
              type="button"
              id="res-time"
              name="time"
              value={bookingData.time}
              className={
                errors.time ? "form-control is-invalid" : "form-control"
              }
              onChange={handleInputChange}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>
          <label htmlFor="guests" className="booking-label">
            {errors.guests ? (
              <span style={{ color: "red", fontSize: "15px" }}>
                {errors.guests}
              </span>
            ) : (
              "Number of guests"
            )}
          </label>
          <input
            className={
              errors.guests ? "form-control is-invalid" : "form-control"
            }
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={bookingData.guests}
            onChange={handleInputChange}
          />
          <label htmlFor="occasion" className="booking-label">
            {errors.occasion ? (
              <span style={{ color: "red", fontSize: "15px" }}>
                {errors.occasion}
              </span>
            ) : (
              "Occasion"
            )}
          </label>

          <select
            className={
              errors.occasion ? "form-control is-invalid" : "form-control"
            }
            type="button"
            id="occasion"
            name="occasion"
            value={bookingData.occasion}
            onChange={handleInputChange}
          >
            {errors.occasion}
            {occasions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <Button type="submit" text="Reserve a table" />
        </form>
      </div>
    </>
  );
};

export default BookingForm;
