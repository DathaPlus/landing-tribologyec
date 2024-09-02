import React from 'react';
import { OurServices, OurCommitment } from '@components/services';
import { Hero } from '@components/base';
import Bar from '@components/Bar';
import servicesHeroBanner from '@assets/servicios/herobaner_ser.png';
import { Navbar } from '@components/navbar';
import { Footer } from '@components/footer';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { IServicesPage } from '@interfaces/app/IServicesPage';
import { SolutionsCenter } from '@components/common';
import {carouselServiceData, heroDataservices} from '@data/servicios';


const ServicesPage = async (): Promise<React.JSX.Element> => {
  const servicesData: IWordpressPageData<IServicesPage> | undefined =
    await getWordpressPageData<IServicesPage>({
      searchParams: { namePage: 'Servicios' },
    });

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero {...servicesData?.acf?.heroBanner} image={servicesHeroBanner.src}
      {...heroDataservices}/>
      <SolutionsCenter  />
      <OurServices {...carouselServiceData}
        />
      <OurCommitment  />
      <Footer />
    </main>
  );
};

export default ServicesPage;
