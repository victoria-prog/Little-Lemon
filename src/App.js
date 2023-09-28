import "./App.css";
import "./index.css";

import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import About from "./components/About";
import ConfirmationPage from "./components/ConfirmationPage";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Login from "./components/Login";

function App() {
  return (
    <div className="box">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/confirmed" element={<ConfirmationPage />}></Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
