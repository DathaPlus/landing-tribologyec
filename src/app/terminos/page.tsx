
import React from 'react';
import { Hero } from '@components/base';
import Bar from '@components/Bar';
import servicesHeroBanner from '@assets/servicios/herobaner_ser.png';
import { Navbar } from '@components/navbar';
import { Footer } from '@components/footer';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { IServicesPage } from '@interfaces/app/IServicesPage';
import { Contacts } from '@components/contact';
import { heroTerminos } from '@data/Terminos';
import { Hero2 } from '@components/base/layout/hero2';


const TerminosPage = async (): Promise<React.JSX.Element> => {
  const servicesData: IWordpressPageData<IServicesPage> | undefined =
    await getWordpressPageData<IServicesPage>({
      searchParams: { namePage: 'Servicios' },
    });

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero2  { ...heroTerminos } />
     
      
      <Contacts />
      <Footer />
    </main>
  );
};

export default TerminosPage;
