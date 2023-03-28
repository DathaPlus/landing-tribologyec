import { Hero, OurProjects, Products, Services } from '@components/home';
import React from 'react';
import Trayectory from "@components/home/trayectory";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <OurProjects />
      <Products />
      <Trayectory/>
    </>
  );
};

export default HomePage;
