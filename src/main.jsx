import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Provider from "./Context/Provider.jsx";
import { BrowserRouter } from "react-router-dom";
import CreateProvider from "./Context/CreateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <CreateProvider>
          <App />
        </CreateProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


