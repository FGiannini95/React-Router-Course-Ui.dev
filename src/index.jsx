// React 18 entry — replaces ReactDOM.render
import React from "react";
import { createRoot } from "react-dom/client"; // new API lives here
import "./index.css";
import App from "./components/App";

// Create a root and render the app (React 18 way)
const container = document.getElementById("root"); // element where we mount the app
const root = createRoot(container); // create a root for concurrent rendering

root.render(
  <React.StrictMode>
    <div className="yellow-border" />
    <App />
  </React.StrictMode>
);
