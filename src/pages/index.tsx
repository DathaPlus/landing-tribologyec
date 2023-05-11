import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Hero, OurProjects, Products, Services } from '@components/home';
import Trayectory from '@components/home/trayectory';
import { Contacts, Navbar } from '@components/index';
import React from 'react';

const HomePage = () => (
  <>
    <Bar />
    <Navbar />
    <Hero />
    <Services />
    <OurProjects />
    <Products />
    <Trayectory />
    <Contacts />
    <Footer />
  </>
);

export default HomePage;
