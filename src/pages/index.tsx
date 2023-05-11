import Bar from '@components/Bar';
import { Hero, OurProjects, Products, Services } from '@components/home';
import { Contacts } from '@components/index';
import React from 'react';

const HomePage = () => (
  <>
    <Bar />
    <Hero />
    <Services />
    <OurProjects />
    <Products />
    <Contacts />
  </>
);

export default HomePage;
