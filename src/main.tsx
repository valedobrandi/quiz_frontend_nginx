/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from "react-dom/client";
import React from 'react';
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
