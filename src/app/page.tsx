import React from 'react';
import { Hero, OurProjects, Products, Services } from '@components/home';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import Trayectory from '@components/home/trayectory';
import { Contacts, Navbar } from '@components/index';

export default function Home() {
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero />
      <Services />
      <OurProjects />
      <Products />
      <Trayectory />
      <Contacts />
      <Footer />
    </main>
  );
}
