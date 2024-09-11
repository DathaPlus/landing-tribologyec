'use client';
import { Icon } from '@dathaplus/storybook';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {StickyButton} from "@components/common";

export const Bar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__wrapper">
          <Link href="/" className="navbar__left">
            <Image
              className="navbar__logo"
              src="/img/logos/logo.svg"
              width={100}
              height={30}
              alt="Logo"
            />
          </Link>
          <div className="navbar__right">
            <a className="navbar__right-link" href="mailto:ventas@tribologyec.com">
              <Icon type="feather" name="mail" size={18} />
              <span>ventas@tribologyec.com</span>
            </a>

            <a
              className="navbar__right-link"
              href="https://wa.me/593993645779"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="feather" name="phone" size={18} />
              <span>+593 9936 45779</span>
            </a>
          </div>
        </div>

      </nav>
      <StickyButton/>
    </>
  );
};

export default Bar;
