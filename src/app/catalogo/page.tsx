import React from 'react';
import { Bar, Navbar, Hero, CatalogueList, Contacts, Footer, ProductList } from '@components/index';
import {dataProductBannerInformation} from "@data/products";
//import { getCataloguePage } from '@server/catalogue/getCataloguePage';
//import { ICatalogueData } from '@interfaces/catalogue';

export default async function CataloguePage(): Promise<React.JSX.Element> {
  //const data: ICatalogueData | undefined = await getCataloguePage();

  return (
    <main>
      <Bar />
      <Navbar />
      {/*<Hero {...data?.heroBanner} />*/}
      <Hero {...dataProductBannerInformation}/>
      <CatalogueList />
      <ProductList />
      <Contacts />
      <Footer />
    </main>
  );
}