import React from 'react';
import { Hero, OurProjects, Products, Services, SolutionsCenter } from '@components/home';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import Trayectory from '@components/home/trayectory';
import { Contacts, Navbar } from '@components/index';

const HomePage = () => {
  return (
    <>
      <Bar />
      <Navbar />
      <Hero />
      <SolutionsCenter/>
      <Services />
      <OurProjects />
      <Products />
      <Trayectory />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomePage;
