import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import { GlobalProvider } from "./context/globalContext";

import "antd/dist/antd.css";
import ThemeManager from "./components/ThemeManager";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Header />
      <Carousel />
      <App />
      <ThemeManager />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
