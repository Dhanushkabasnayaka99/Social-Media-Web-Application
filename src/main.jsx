import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeContextProvider } from "./Context/darkMode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </DarkModeContextProvider>
);
