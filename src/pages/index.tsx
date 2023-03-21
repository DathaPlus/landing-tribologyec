import TrayectoriaComponent from '@components/trayectoria';
import BannerHeroComponent from '@components/banner-hero/banner-hero';
import ContactoComponent from '@components/contacto/contacto';
import FooterComponent from '@components/footer/footer';

import '../css/styles.css';

import React from 'react';
import {NavbarMenu} from "@components/navbar";
const IndexPage = () => {
  return (
    <>
      <NavbarMenu/>
      <BannerHeroComponent />
      <ContactoComponent />
      <FooterComponent />
    </>
  );
};

export default IndexPage;
