import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { SignUp } from "./Pages/SignUp";
import DashBoard from "./Pages/Dashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<App />}>
          <Route element={<DashBoard />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
