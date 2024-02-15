import React from "react";
import Cards from "./home/Cards";
import Coach from "./home/Coach";
import Footer from "./home/Footer";
import Gain from "./home/Gain";
import Hero from "./home/Hero";
import Navbar from "./home/Navbar";
import Preinscription from "./home/Preinscription";

const Home = () => {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Gain />
      <Coach />
      <Preinscription />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
