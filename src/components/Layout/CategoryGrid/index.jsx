import React from "react";
import styles from "./styles.module.scss";

const CategoryGrid = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default CategoryGrid;
