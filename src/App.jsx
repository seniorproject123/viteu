import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Faq from "./components/Faq";
import Blog1 from "./components/blog/Blog1";
import Blog2 from "./components/blog/Blog2";
import Blog3 from "./components/blog/Blog3";
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
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/blog3" element={<Blog3 />} />
      <Route path="/plus" element={<Plus />} />
      <Route path="/preinscription" element={<Preinscription />} />
      <Route path="/conseil" element={<Conseil />} />
      <Route path="/prestige" element={<Prestige />} />
      <Route path="/condition-utilisation" element={<ConditionUtilisation />} />
      <Route path="/confidentialite" element={<Confidentialite />} />
      <Route path="/politique-cookie" element={<PolitiqueCookie />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
