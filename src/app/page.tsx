import React from 'react';
import { Hero, OurProjects, Products, Services } from '@components/home';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import Trajectory from '@components/home/trayectory';
import { Contacts, Navbar } from '@components/index';
import { getProducts } from '@server/common/getProducts';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { ICardProduct, IHomeServerPage } from '@interfaces/home';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
export default async function Home(): Promise<React.JSX.Element> {
  const { products } = await getProducts({ filter: { category: 'Herramientas' } });
  const homeData: IWordpressPageData<IHomeServerPage> | undefined = await getWordpressPageData<any>(
    { searchParams: { namePage: 'Home' } },
  );

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero {...homeData?.acf?.heroBanner} />
      <Services mission={homeData?.acf.mission} carrousel={homeData?.acf?.services} />
      {/* TODO: Obtener los datos desde el admin de Wordpress */}
      <OurProjects />
      <Products products={products} />
      <Trajectory {...homeData?.acf?.trajectory} />
      <Contacts />
      <Footer />
    </main>
  );
}
