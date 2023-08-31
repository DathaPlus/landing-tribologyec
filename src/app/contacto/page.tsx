import React from 'react';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts } from '@components/contact';
import { Navbar } from '@components/navbar';
import { Hero } from '@components/base';
import { Assessor, Networks } from '@components/app';
import contactHeroBanner from '@assets/img/contact_hero_bg.png';

const ContactPage = () => {
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero title="Contacto" image={contactHeroBanner.src} />
      <Assessor />
      <Networks />
      <Contacts />
      <Footer />
    </main>
  );
};

export default ContactPage;
