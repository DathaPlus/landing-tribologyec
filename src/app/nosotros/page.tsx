import React from 'react';
import { Hero, SolutionsCenter } from '@components/aboutus';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts, Navbar } from '@components/index';
import { Products } from '@components/aboutus/products';
import {getProducts} from "@server/common/getProducts";
import KnowUs from '@components/aboutus/knowus';


const products = await getProducts({ filter: {category: "Herramientas"} });

const ServicesPage = () => {
  
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero />
      <SolutionsCenter />
      <KnowUs />
      <Products products={products}/>
      <Contacts />
      <Footer />
    </main>
  );
};

export default ServicesPage;
