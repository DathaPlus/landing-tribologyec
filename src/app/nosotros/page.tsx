import React from 'react';
import { AboutusCarousel, KnowUs } from '@components/aboutus';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts, Navbar } from '@components/index';
import { Hero } from '@components/base';
import AboutusBanner from '@assets/img/hero-bg/aboutus_banner.png';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { IAboutusPage } from '@interfaces/app/IAboutusPage';
import { SolutionsCenter } from '@components/common/solutionsCenter';
import { getWordpressPageData } from '@server/common/getWordpressPageData';

const AboutusPage = async () => {
  const aboutusData: IWordpressPageData<IAboutusPage> | undefined =
    await getWordpressPageData<IAboutusPage>({
      searchParams: { namePage: 'Nosotros' },
    });

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero {...aboutusData?.acf?.heroBanner} image={AboutusBanner.src} />
      <KnowUs {...aboutusData?.acf?.knowUs} />
      <AboutusCarousel />
      <SolutionsCenter {...aboutusData?.acf?.solutionsCenter} />
      <Contacts />
      <Footer />
    </main>
  );
};

export default AboutusPage;
