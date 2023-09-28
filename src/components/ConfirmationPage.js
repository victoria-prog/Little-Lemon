import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";
import "../css/confirmation.css";

const ConfirmationPage = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <Hero />
        <div className="success">
          <div className="ui_message_success">
            Thank you! Your reservation has been succesfully submitted
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmationPage;
