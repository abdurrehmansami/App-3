import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Pages/Home";
import Contact from "./Contact/Contact";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
          
        </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
