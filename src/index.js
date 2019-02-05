import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import App from "./components/App.js";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <div>
    <App />
    <ToastContainer />
  </div>,
  document.getElementById("root")
);
