import React from 'react';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts } from '@components/contact';
import { Navbar } from '@components/navbar';
import { Hero } from '@components/base';
import { Assessor, Networks } from '@components/app/contacto';
import contactHeroBanner from '@assets/img/contact_hero_bg.png';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { IContactPage } from '@interfaces/app/IContactPage';

const ContactPage = async () => {
  const contactData = await getWordpressPageData<IContactPage>({
    searchParams: { namePage: 'Contacto' },
  });

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero title={contactData?.acf?.heroBanner?.title || ''} image={contactHeroBanner.src} />
      <Assessor assessor={contactData?.acf?.assessor} />
      <Networks socialNetworks={contactData?.acf?.socialNetworks} />
      <Contacts />
      <Footer />
    </main>
  );
};

export default ContactPage;
