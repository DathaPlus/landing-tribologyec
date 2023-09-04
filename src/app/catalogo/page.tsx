import React from 'react'
import {Bar, Navbar, Hero, CatalogueList, ProductList, Contacts, Footer} from '@components/index';
import { getCataloguePage } from '@server/catalogue/getCataloguePage';

export default async function CataloguePage(){

  const data = await getCataloguePage();

  return (
    <main >
      <Bar />
      <Navbar />
      <Hero {...data?.heroBanner}/>
      <CatalogueList />
      <ProductList products={data?.products}/>
      <Contacts />
      <Footer />
    </main>
  )
}
