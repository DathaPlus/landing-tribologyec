import React from 'react';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts } from '@components/contact';
import { Navbar } from '@components/navbar';
import { Hero } from '@components/base';
import { Assessor, Networks } from '@components/app/contacto';
import contactHeroBanner from '@assets/contacto/image.png';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { IContactPage } from '@interfaces/app/IContactPage';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';

const ContactPage = async () => {
  const contactData: IWordpressPageData<IContactPage> | undefined =
    await getWordpressPageData<IContactPage>({
      searchParams: { namePage: 'Contacto' },
    });

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero title={contactData?.acf?.heroBanner?.title || ''} image={contactHeroBanner.src} />
      <Assessor  />
      <Networks />
      <Contacts />
      <Footer />
    </main>
  );
};

export default ContactPage;
