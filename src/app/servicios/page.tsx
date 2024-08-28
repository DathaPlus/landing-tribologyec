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
import { ICard } from '@interfaces/common/ICard';
import { SolutionsCenter } from '@components/common';
import { Contacts } from '@components/contact';
import { dataServices,heroDataservices } from '@data/servicios';


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
      <SolutionsCenter  {...dataServices}/>
      <OurServices
        services={(servicesData?.acf?.ourServices || []).map((ele: ICard) => ({
          ...ele,
          link: {
            href: ele.link as string,
            type: 'external',
            externalProps: {
              target: '_blank',
              rel: 'noreferrer',
            },
          },
        }))}
        />
      <OurCommitment {...servicesData?.acf?.ourCommitment} />
      <Contacts />
      <Footer />
    </main>
  );
};

export default ServicesPage;
