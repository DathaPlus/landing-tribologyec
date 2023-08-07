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
            <a href="#">Servicios</a>
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
            <a href="#">Productos</a>
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
            <a href="telf:+59323823894">+593 238 238 94</a>
          </li>
          <li>
            <a href="mailto:ventas@tribologyec.com">ventas@tribologyec.com</a>
          </li>
          <li>
            <span>Av. De los Shirys N32-218 y Av. Eloy Alfaro Edificio Parque Central</span>
          </li>
        </ul>

        <span className="footer__copyright">©2018 - Form | All right reserved</span>
      </section>
    </div>
  </footer>
);
