import React from "react";
import ReactDOM from "react-dom/client"; // Gunakan createRoot dari react-dom/client
import App from "./App";
import "./styles.css"; // Jika ada file CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
