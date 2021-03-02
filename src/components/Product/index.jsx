import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { Collapse, Tooltip } from "antd";

const Product = ({ name, image, description, price, colors, url }) => {
  const { Panel } = Collapse;

  useEffect(() => {}, []);

  return (
    <article className={styles.container}>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <Collapse>
        <Panel header="Description" key="1">
          <p>{description}</p>
        </Panel>
      </Collapse>
      <p className={styles.price}> {`$ ${price}`}</p>
      <ul className={styles.colorsContainer}>
        {colors.map((color) => {
          return (
            <Tooltip color="pink" title={color.colour_name}>
              <li
                style={{ backgroundColor: color.hex_value }}
                className={styles.color}
              ></li>
            </Tooltip>
          );
          //   {color.hex_value}
        })}
      </ul>
      <div className={styles.buttonContainer}>
        <a href={url}>Ver en tienda</a>
      </div>
    </article>
  );
};

export default Product;
