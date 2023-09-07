import React from 'react';
import { Hero, OurProjects, Products, Services } from '@components/home';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import Trayectory from '@components/home/trayectory';
import { Contacts, Navbar } from '@components/index';
import { getProducts } from '@server/common/getProducts';
import { getWordpressPageData } from '@server/common/getWordpressPageData';

export default async function Home() {
  const products = await getProducts({ filter: { category: 'Herramientas' } });
  //TODO: get home data
  const homeData = await getWordpressPageData<any>({ searchParams: { namePage: 'Home' } });
  console.log(homeData);

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero />
      <Services />
      <OurProjects />
      <Products products={products} />
      <Trayectory />
      <Contacts />
      <Footer />
    </main>
  );
}
