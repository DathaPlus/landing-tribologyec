'use client';
import { Icon } from '@dathaplus/storybook';
import React from 'react';

function Bar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <img className="navbar__logo" src="/img/logos/logo.svg" alt="Logo" />
        </div>
        <div className="navbar__right">
          <a className="navbar__right-link" href="mailto:info@tribologyec.com">
            <Icon type="feather" name="mail" size={18} />
            <span>ventas@tribologyec.com</span>
          </a>
          <a className="navbar__right-link" href="tel:+1-234-567-8900">
            <Icon type="feather" name="phone" size={18} />
            <span>+593 2382 3894 / +593 9936 45779</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Bar;
