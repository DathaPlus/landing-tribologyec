import React from 'react';
import { SolutionsCenter, OurServices, OurCommitment } from '@components/services';
import { Hero } from '@components/base';
import Bar from '@components/Bar';
import servicesHeroBanner from '@assets/img/services_hero_bg.png';
import { Navbar } from '@components/navbar';
import { Footer } from '@components/footer';

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
