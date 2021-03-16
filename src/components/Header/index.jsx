import React from "react";
import styles from "./styles.module.scss";
import { navigate } from "@reach/router";
import { useApp } from "../../context/globalContext";

import logo from "../../images/logo.png";
import logoDark from "../../images/logo-dark.png";

const Header = () => {
  const { theme } = useApp();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className={styles.header}>
      <img
        onClick={handleClick}
        src={theme == "ligth" ? logoDark : logoDark}
        alt=""
      />
    </div>
  );
};

export default Header;
