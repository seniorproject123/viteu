import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App /> {/* render the Preinscription component */}
    </HashRouter>
  </React.StrictMode>,
);
