import React from 'react';
import { SolutionsCenter, OurServices, OurCommitment } from '@components/services';
import { Hero } from '@components/base';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Navbar } from '@components/index';
import servicesHeroBanner from '@assets/img/services_hero_bg.png';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { IServicesPage } from '@interfaces/app/IServicesPage';
import { ICard } from '@interfaces/common/ICard';

const ServicesPage = async (): Promise<React.JSX.Element> => {
  const servicesData: IWordpressPageData<IServicesPage> | undefined =
    await getWordpressPageData<IServicesPage>({
      searchParams: { namePage: 'Servicios' },
    });

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero {...servicesData?.acf?.heroBanner} image={servicesHeroBanner.src} />
      <SolutionsCenter {...servicesData?.acf?.solutionsCenter} />
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
      <Footer />
    </main>
  );
};

export default ServicesPage;
