import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { parse } from "query-string";
import { useLocation } from "@reach/router";
import styles from "../styles/results.module.scss";
import Product from "../components/Product";

const categoryToEndpoint = [
  {
    name: "blush",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush",
  },
  {
    name: "bronzer",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer",
  },
  {
    name: "eyebrow",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow",
  },
  {
    name: "eyeliner",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner",
  },
  {
    name: "eyeshadow",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow",
  },
  {
    name: "foundation",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation",
  },
  {
    name: "lip_liner",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner",
  },
  {
    name: "lipstick",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick",
  },
  {
    name: "mascara",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara",
  },
  {
    name: "nail_polish",
    url:
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish",
  },
];

const Results = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const location = useLocation();
  const searchParams = parse(location.search);

  const category = categoryToEndpoint.filter(
    (cat) => cat.name == searchParams.cat
  );
  useEffect(async () => {
    const url = category[0].url;

    async function getData() {
      try {
        const rawData = await fetch(url);
        const data = await rawData.json();
        setData(data);
        setLoading(false);
      } catch (e) {
        console.log(`error:`, e);
        setError(true);
      }
    }
    getData();
  }, []);
  console.log(`data`, data);
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Spin size="large" />
      </div>
    );
  } else {
    if (error) {
      return (
        <div>
          <h1>No se pudo cargar el contenido, intenta de nuevo más tarde</h1>
        </div>
      );
    }
    return (
      <div className={styles.content}>
        <div id="top" className={styles.header}>
          <div>
            <LeftOutlined />
            <p>{category[0].name}</p>
          </div>
        </div>
        {data.map((item) => {
          return (
            <Product
              key={data.id}
              image={item.api_featured_image}
              name={item.name}
              description={item.description}
              price={item.price}
              colors={item.product_colors}
              url={item.product_link}
            />
          );
        })}
      </div>
    );
  }
};

export default Results;
