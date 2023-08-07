import React from 'react';
import {Hero, SolutionsCenter, OurServices, OurCommitment} from "@components/services";
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Navbar } from '@components/index';

const ServicesPage = () => {
  return (
    <>
      <Bar />
      <Navbar />
      <Hero />
      <SolutionsCenter />
      <OurServices />
      <OurCommitment />
      <Footer />
    </>
  );
};

export default ServicesPage;