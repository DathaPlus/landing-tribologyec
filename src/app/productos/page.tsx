import React from 'react';
import { Bar, Navbar, Hero, Contacts, Footer, ProductList, Products } from '@components/index';
import {dataProductBannerInformation} from "@data/products";

export default async function CataloguePage(): Promise<React.JSX.Element> {
  return (
    <main>
      <Bar />
      <Navbar />
      {/*<Hero {...data?.heroBanner} />*/}
      <Hero {...dataProductBannerInformation}/>
      <Products products={[]} />
      {/*<CatalogueList />*/}
      <ProductList />
      <Contacts />
      <Footer />
    </main>
  );
}