import React from 'react';
import { AboutusCarousel, SolutionsCenter,KnowUs } from '@components/aboutus';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts,  Navbar } from '@components/index';
import { Hero } from '@components/base';
import AboutusBackground from '@assets/img/services_hero_bg.png';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { IAboutusPage } from '@interfaces/app/IAboutusPage';
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
      <Hero  {...aboutusData?.acf?.heroBanner} image={AboutusBackground.src} />
      <SolutionsCenter {...aboutusData?.acf?.solutionsCenter}/>
      <KnowUs {...aboutusData?.acf?.knowUs}/>
      <AboutusCarousel carouselAboutus={aboutusData?.acf.carouselAboutus}/>
      <Contacts />
      <Footer />
    </main>
  );
};

export default AboutusPage;
