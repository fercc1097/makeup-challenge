import React from "react";
import { Link, navigate } from "@reach/router";
import styles from "./styles.module.scss";

const Item = ({ image, text = "Maybelline", url = "/" }) => {
  function handleClick() {
    navigate(url, { replace: true });
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div onClick={handleClick} className={styles.buttonShape}>
          <p className={styles.link}>{text}</p>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Item;
