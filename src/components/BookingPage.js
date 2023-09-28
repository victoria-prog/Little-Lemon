import React, { useReducer } from "react";
import BookingForm from "./BookingFrom";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import { fetchAPI } from "../mockAPI";
import "../css/bookingForm.css";
import "../css/main.css";

const BookingPage = () => {
  const updateTimes = (availableTimes, date) => {
    return fetchAPI(new Date(date));
  };
  const initializeTimes = [...fetchAPI(new Date())];

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <>
      <Nav />
      <div className="main">
        <Hero />
        <BookingForm
          className="booking"
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
