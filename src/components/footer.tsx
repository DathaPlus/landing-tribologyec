'use client';
import { Icon } from '@dathaplus/storybook';
import React from 'react';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <section>
        <img className="footer__logo" src="/img/logos/logo2.svg" alt="logo" />
        <p>
          Una compañía dedicada a la comprensión del comportamiento de los pernos y tornillos en
          servicio
        </p>
        <article className="footer__social-networks">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon name="facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Icon name="twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Icon name="instagram" />
          </a>
        </article>
      </section>

      <section>
        <span className="footer__title">Servicios</span>
        <ul>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
        </ul>
      </section>

      <section>
        <span className="footer__title">Productos</span>
        <ul>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="#">Herramientas</a>
          </li>
        </ul>
      </section>



      <section>
        <span className="footer__title">Contacto</span>
        <ul>
          <li>
            <a href="tel:+59323823894">+593 238 238 94</a>

          </li>
          <li>
            <a href="https://wa.me/593993645779" target="_blank" rel="noopener noreferrer">+593 9936 45779</a>
          </li>

          <li>
            <a href="mailto:ventas@tribologyec.com">ventas@tribologyec.com</a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=Av.+De+los+Shirys+N32-218+y+Av.+Eloy+Alfaro+Edificio+Parque+Central" target="_blank" rel="noopener noreferrer">
              Av. De los Shirys N32-218 y Av. Eloy Alfaro Edificio Parque Central
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div className="footer__copyright_container">
      <a href={"/terminos-y-condiciones"} className="footer__copyright">Terms and conditions</a>
      <span className="footer__copyright">©2024 - Form | All rights reserved</span>
    </div>
  </footer>
);
