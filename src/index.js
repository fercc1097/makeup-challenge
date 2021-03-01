import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

import "./styles/index.scss";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Carousel />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
