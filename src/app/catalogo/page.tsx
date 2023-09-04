import React from 'react'
import {Bar, Navbar, Hero, CatalogueList, ProductList, Contacts, Footer} from '@components/index';
import type {NextPage} from 'next'
import { getCataloguePage } from '@server/catalogue/getCataloguePage';

export const CataloguePage:NextPage = async () => {

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

export default CataloguePage;
