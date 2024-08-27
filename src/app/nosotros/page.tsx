import React from 'react';
import { AboutusCarousel, KnowUs } from '@components/aboutus';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts, Navbar } from '@components/index';
import { Hero } from '@components/base';
import AboutusBackground from '@assets/img/services_hero_bg.png';
import { SolutionsCenter } from '@components/common/solutionsCenter';

const AboutusPage = async () => {
  

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero image={AboutusBackground.src} />
      <SolutionsCenter  />
      <KnowUs  />
      <AboutusCarousel  />
      <Contacts />
      <Footer />
    </main>
  );
};

export default AboutusPage;
