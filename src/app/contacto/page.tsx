import React from 'react';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Contacts } from '@components/contact';
import { Navbar } from '@components/navbar';
import { Hero } from '@components/base';
import { Assessor, Networks } from '@components/app/contacto';
import {contactHeroData} from "@data/contacto";

const ContactPage = async () => {
  // const contactData: IWordpressPageData<IContactPage> | undefined =
  //   await getWordpressPageData<IContactPage>({
  //     searchParams: { namePage: 'Contacto' },
  //   });

  return (
    <main>
      <Bar />
       
      <Navbar />
      {/*<Hero   title={contactData?.acf?.heroBanner?.title || ''} image={contactHeroBanner.src} />*/}
      <Hero{...contactHeroData} />
      <Assessor  />
     
      <Networks />
      <Contacts />
      <Footer />
    </main>
  );
};

export default ContactPage;
