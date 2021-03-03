import React from "react";
import { Link, navigate } from "@reach/router";
import styles from "./styles.module.scss";
import { useApp } from "../../context/globalContext";

const Categories = ({ name, color, url, img }) => {
  const { theme } = useApp();
  function handleClick() {
    navigate(`/results?cat=${name}`);
  }
  return (
    <div
      onClick={handleClick}
      className={theme == "ligth" ? styles[color] : styles.darkProduct}
      onClick={handleClick}
    >
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
