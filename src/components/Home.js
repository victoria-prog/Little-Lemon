import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = ({ cards }) => {
  return (
    <>
      <Nav />
      <Main cards={cards} />
      <Footer />
    </>
  );
};

export default Home;
