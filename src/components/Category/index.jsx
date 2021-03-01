import React from "react";
import { Link, navigate } from "@reach/router";
import styles from "./styles.module.scss";

const Categories = ({ name, color, url, img }) => {
  function handleClick() {
    navigate(`/results?cat=${name}`);
  }
  return (
    <div onClick={handleClick} className={styles[color]} onClick={handleClick}>
      <div className={styles.overlay}>
        <Link to={`/results?cat=${name}`}>{name}</Link>
      </div>
      <div className={styles.content}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Categories;
