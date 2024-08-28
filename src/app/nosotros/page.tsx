import React from 'react';
import { AboutusCarousel, KnowUs } from '@components/aboutus';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts, Navbar } from '@components/index';
import { Hero } from '@components/base';
import AboutusBanner from '@assets/img/hero-bg/aboutus_banner.png';
import { SolutionsCenter } from '@components/common/solutionsCenter';
import {dataAboutus} from "@data/nosotros";

const AboutusPage = async () => {
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero image={AboutusBanner.src} 
      title='Nosotros'
      description='En Tribologyec, entendemos lo que pasa cuando un perno esta en servicio, los categorizamos de acuerdo con su función principal y sobre todas las cosas sabemos como instalarlo'
      />
      <KnowUs />
      <AboutusCarousel />
      <SolutionsCenter  {...dataAboutus} />
      <Contacts />
      <Footer />
    </main>
  );
};

export default AboutusPage;
