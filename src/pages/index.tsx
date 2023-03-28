import React from 'react';
import { Hero, OurProjects, Products, Services, SolutionsCenter } from '@components/home';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SolutionsCenter/>
      <Services />
      <OurProjects />
      <Products />
    </>
  );
};

export default HomePage;
