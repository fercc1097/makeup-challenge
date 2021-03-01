import React from "react";
import CategoriesLayout from "../components/Layout/CategoryGrid";
import Category from "../components/Category";

import blushImg from "../images/blush.jpg";
import bronzerImg from "../images/bronzer.jpg";
import eyebrow from "../images/eyebrow.jpg";
import eyelinerImg from "../images/eyeliner.jpg";
import eyeshadowImg from "../images/eyeshadow.jpg";
import foundationImg from "../images/foundation.jpg";
import lipLinerImg from "../images/lip_liner.jpg";
import lipstickImg from "../images/lipstick.jpg";
import mascaraImg from "../images/mascara.jpg";
import nailPolishImg from "../images/nails_polish.jpg";

const categories = [
  {
    name: "blush",
    url: "/blush",
    color: "primaryColor",
    img: blushImg,
  },
  {
    name: "bronzer",
    url: "/bronzer",
    color: "primaryColor",
    img: bronzerImg,
  },
  {
    name: "eyebrow",
    url: "/eyebrow",
    color: "primaryColor",
    img: eyebrow,
  },
  {
    name: "eyeliner",
    url: "/eyeliner",
    color: "primaryColor",
    img: eyelinerImg,
  },
  {
    name: "eyeshadow",
    url: "/eyeshadow",
    color: "secondaryColor",
    img: eyeshadowImg,
  },
  {
    name: "foundation",
    url: "/foundation",
    color: "secondaryColor",
    img: foundationImg,
  },
  {
    name: "lip_liner",
    url: "/lip_liner",
    color: "secondaryColor",
    img: lipLinerImg,
  },
  {
    name: "lipstick",
    url: "/lipstick",
    color: "secondaryColor",
    img: lipstickImg,
  },
  {
    name: "mascara",
    url: "/mascara",
    color: "accentColor",
    img: mascaraImg,
  },
  {
    name: "nail_polish",
    url: "/nail_polish",
    color: "accentColor",
    img: nailPolishImg,
  },
];

const Index = () => {
  return (
    <div>
      <CategoriesLayout>
        {categories.map((cat) => {
          return (
            <Category
              img={cat.img}
              name={cat.name}
              url={cat.url}
              color={cat.color}
            />
          );
        })}
      </CategoriesLayout>
    </div>
  );
};

export default Index;
