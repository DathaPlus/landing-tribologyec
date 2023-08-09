'use client';
import { Icon } from '@dathaplus/storybook';
import React, { useEffect, useRef } from 'react';

export const Navbar = () => {
  const refNavbar = useRef<HTMLElement>(null);
  const refMenuIcon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = refNavbar.current;
    const icon = refMenuIcon.current?.firstChild as HTMLElement;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        nav?.classList.add('main-navbar__scroll');
        icon.parentElement?.classList.add('main-navbar__icon-scroll');
      } else {
        nav?.classList.remove('main-navbar__scroll');
        icon.parentElement?.classList.remove('main-navbar__icon-scroll');
      }
    };

    const handleClicked = () => {
      nav?.classList.toggle('main-navbar__active');
      icon.parentElement?.classList.toggle('main-navbar__icon-active');
    };

    document.addEventListener('scroll', handleScroll);
    icon.addEventListener('click', handleClicked);

    return () => {
      nav?.removeEventListener('scroll', handleScroll);
      icon.removeEventListener('click', handleClicked);
    };
  }, []);

  return (
    <>

      <div ref={refMenuIcon} className="main-navbar__icon">
        <Icon name="menu" />
      </div>
      <nav ref={refNavbar} className="main-navbar">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
