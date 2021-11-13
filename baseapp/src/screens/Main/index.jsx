import React from "react";
import HeaderBar from "./HeaderBar";
import ScrollGallery from "./ScrollGallery";
import Categories from "./Categories";

const MainScreen = () => {
  return (
    <>
      <HeaderBar />
      <ScrollGallery />
      <Categories />
    </>
  );
};

export default MainScreen;
