import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./contexts/UserContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <GlobalStyle />
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
