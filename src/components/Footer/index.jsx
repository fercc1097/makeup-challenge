import React from "react";
import { useApp } from "../../context/globalContext";
import styles from "./styles.module.scss";

const Footer = () => {
  const { theme } = useApp();
  return (
    <div className={theme == "ligth" ? styles.footer : styles.footerDark}>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
