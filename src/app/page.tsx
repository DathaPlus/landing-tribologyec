import React from 'react';
import { Hero, OurProjects, Products, Services } from '@components/home';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import Trayectory from '@components/home/trayectory';
import { Contacts, Navbar } from '@components/index';
import { getProducts } from '@server/common/getProducts';
import { getHomePage } from '@server/home/getHomePage';

export default async function Home() {
  const products = await getProducts({ filter: { category: 'Herramientas' } });
  const homeData = await getHomePage();

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero {...homeData?.heroBanner} />
      <Services {...homeData?.ourServices} />
      <OurProjects />
      <Products products={products} />
      <Trayectory {...homeData?.trayectory} />
      <Contacts />
      <Footer />
    </main>
  );
}
