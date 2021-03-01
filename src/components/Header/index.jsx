import React from "react";
import styles from "./styles.module.scss";
import { navigate } from "@reach/router";

import logo from "../../images/logo.png";

const Header = () => {
  function handleClick() {
    navigate("/");
  }
  return (
    <div className={styles.header}>
      <img onClick={handleClick} src={logo} alt="" />
    </div>
  );
};

export default Header;
