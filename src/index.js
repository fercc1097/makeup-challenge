import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import { GlobalProvider } from "./context/globalContext";

import "antd/dist/antd.css";
import ThemeManager from "./components/ThemeManager";
import Footer from "./components/Footer/index";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Header />
      <Carousel />
      <App />
      <Footer />
      <ThemeManager />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
