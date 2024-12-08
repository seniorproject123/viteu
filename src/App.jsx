import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Faq from "./components/Faq";
import BlogPost from "./components/blog/BlogPost"; // Route dynamique pour les articles
import Plus from "./components/home/Plus";
import Preinscription from "./components/home/Preinscription";
import Conseil from "./components/Conseil";
import Prestige from "./components/Prestige";
import ConditionUtilisation from "./components/ConditionUtilisation";
import Confidentialite from "./components/Confidentialite";
import PolitiqueCookie from "./components/PolitiqueCookie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/articles/:slug" element={<BlogPost />} />{" "}
      {/* Route dynamique */}
      <Route path="/plus" element={<Plus />} />
      <Route path="/preinscription" element={<Preinscription />} />
      <Route path="/conseil" element={<Conseil />} />
      <Route path="/prestige" element={<Prestige />} />
      <Route path="/condition-utilisation" element={<ConditionUtilisation />} />
      <Route path="/confidentialite" element={<Confidentialite />} />
      <Route path="/politique-cookie" element={<PolitiqueCookie />} />
      <Route path="*" element={<Home />} />{" "}
      {/* Redirige vers la page d'accueil */}
    </Routes>
  );
}

export default App;
