import React from 'react';
import { Hero, OurProjects, Products, Services } from '@components/home';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import Trajectory from '@components/home/trayectory';
import { Contacts, Navbar } from '@components/index';
import { getProducts } from '@server/common/getProducts';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { IHomeServerPage } from '@interfaces/home';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { IGetPromiseProductsResponse } from '@interfaces/server/common/IGetPromiseProductsResponse';
export default async function Home(): Promise<React.JSX.Element> {
  const { products }: IGetPromiseProductsResponse = await getProducts({
    filter: { category: 'Herramientas' },
  });
  const homeData: IWordpressPageData<IHomeServerPage> | undefined = await getWordpressPageData<any>(
    { searchParams: { namePage: 'Home' } },
  );

  return (
    <main>
      <Bar />
      <Services mission={homeData?.acf.mission} carrousel={homeData?.acf?.services} />
      <Hero {...homeData?.acf?.heroBanner} />
      {/* TODO: Obtener los datos desde el admin de Wordpress */}
      <OurProjects />
      <Products products={products} />
      <Navbar />
      <Trajectory {...homeData?.acf?.trajectory} />
      <Contacts />
      <Footer />
    </main>
  );
}
