import React from 'react';
import { SolutionsCenter, OurServices, OurCommitment } from '@components/services';
import { Hero } from '@components/base';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Navbar } from '@components/index';
import servicesHeroBanner from '@assets/img/hero_bg.png';

const ServicesPage = () => {
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero
        title="Servicios"
        subtitle="Profesionales experimentados"
        image={servicesHeroBanner.src}
      />
      <SolutionsCenter />
      <OurServices />
      <OurCommitment />
      <Footer />
    </main>
  );
};

export default ServicesPage;
