import React from 'react'
import {Bar, Navbar, Hero, CatalogueList, Contacts, Footer, ProductList} from '@components/index';
import { getCataloguePage } from '@server/catalogue/getCataloguePage';

export default async function CataloguePage(){
  
  const data = await getCataloguePage();
  

  return (
    <main >
      <Bar />
      <Navbar />
      <Hero {...data?.heroBanner}/>
      <CatalogueList />
      <ProductList/>
      <Contacts />
      <Footer />
    </main>
  )
}
