import React from "react";
import styles from "./styles.module.scss";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
