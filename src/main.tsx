/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from "react-dom/client";
import React from 'react';
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
