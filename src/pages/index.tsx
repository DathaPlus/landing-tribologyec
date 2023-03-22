import { Hero, OurProjects, Products, Services } from '@components/home';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <OurProjects />
      <Products />
    </>
  );
};

export default HomePage;
