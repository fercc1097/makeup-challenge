import Carousel from "../components/Carousel";
import React from "react";
import Header from "../components/Header";
import CategoriesLayout from "../components/Layout/CategoryGrid";
import Category from "../components/Category";

const Index = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <CategoriesLayout>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </CategoriesLayout>
    </div>
  );
};

export default Index;
