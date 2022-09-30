import React from "react";
import About from "../About";
import Footer from "../Footer";
import MainImage from "../MainImage";
import Navbar from "../Navbar";
import Header from "../Header"
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainImage />
      <Header />
      <About />
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
