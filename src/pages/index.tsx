import { Hero, OurProjects, Products, Services } from '@components/home';
import { Contacts } from '@components/index';
import React from 'react';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <OurProjects />
    <Products />
    <Contacts />
  </>
);

export default HomePage;
