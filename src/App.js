import "./App.css";
import "./index.css";
import { useState } from "react";
import greek_salad from "./images/greek_salad.png";
import bruchetta from "./images/bruchetta.png";
import lemon_dessert from "./images/lemon_dessert.jpg";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Reservations from "./components/Reservations";

function App() {
  const [cards, setCard] = useState([
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese gurnished with garlic",
      image: greek_salad,
    },
    {
      title: "Bruchetta",
      description:
        "Our Bruchetta made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil ",
      image: bruchetta,
    },
    {
      title: "Lemon Dessert",
      description:
        "This comes straight from grandmas recipe book, every last ingredient has been sourced and is authentic as can be imagined",
      image: lemon_dessert,
    },
  ]);

  return (
    <div className="box">
      <Routes>
        <Route path="/" element={<Home cards={cards} />} />
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>
    </div>
  );
}

export default App;
