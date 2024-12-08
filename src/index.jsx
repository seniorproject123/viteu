import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Blog1 from "./components/blog/Blog1";
import Blog2 from "./components/blog/Blog2";
import Blog3 from "./components/blog/Blog3";
import Blog4 from "./components/blog/Blog4";
import BlogRecent from "./components/blog/BlogRecent";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />{" "}
        {/* Vérifie que Blog4 est ici */}
        <Route path="/BlogRecent" element={<BlogRecent />} />
        <Route path="*" element={<Home />} />{" "}
        {/* Redirige toutes les autres URLs vers la page d'accueil */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
