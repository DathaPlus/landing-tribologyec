import React from 'react';
import { AboutusCarousel, SolutionsCenter } from '@components/aboutus';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts,  Navbar } from '@components/index';
import KnowUs from '@components/aboutus/knowus';
import { Hero } from '@components/base';
import AboutusBackground from '@assets/img/services_hero_bg.png';

const ServicesPage = async () => {
  
  
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero title= "Nosotros" image={AboutusBackground.src} subtitle="Profesionales experimentados"/>
      <SolutionsCenter />
      <KnowUs />
      <AboutusCarousel />
      <Contacts />
      <Footer />
    </main>
  );
};

export default ServicesPage;
