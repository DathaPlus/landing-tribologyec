import React from 'react';
import { Hero, SolutionsCenter, OurServices, OurCommitment } from '@components/services';
import Bar from '@components/Bar';
import { Footer, Navbar } from '@components/index';

const ServicesPage = () => {
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero />
      <SolutionsCenter />
      <OurServices />
      <OurCommitment />
      <Footer />
    </main>
  );
};

export default ServicesPage;
