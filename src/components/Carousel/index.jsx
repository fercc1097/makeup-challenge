import React from "react";
import { Carousel } from "antd";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import styles from "./styles.module.scss";
import Item from "./CarouselItem";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CustomCarousel = () => {
  return (
    <div className={styles.content}>
      <Carousel autoplay effect="fade">
        <Item image={banner1} text="Eyes Shadow" />
        <Item image={banner2} text="Nails Polish" />
        <Item image={banner3} text="Bush" />
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
