import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog1 from "./components/blog/Blog1";
import Blog2 from "./components/blog/Blog2";
import Blog3 from "./components/blog/Blog3";
import BlogRecent from "./components/blog/BlogRecent";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename="/votre-sous-repertoire">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/BlogRecent" element={<BlogRecent />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
