import React from 'react';
import { Hero, OurProjects, Products, Services } from '@components/home';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import Trayectory from '@components/home/trayectory';

export default function Home() {
  return (
    <main >
        <Bar />
        <Hero />
        <Services />
        <OurProjects />
        <Products />
        <Trayectory />
        <Footer />
    </main>
  )
}
