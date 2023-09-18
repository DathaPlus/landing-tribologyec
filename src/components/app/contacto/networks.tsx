'use client';
import React, { Fragment } from 'react';
import { Carousel, SwiperModules } from '@dathaplus/storybook';
import { NetworkCard } from '@components/cards';
import { contactPageIcons } from '@data/contacto';
import { CarouselNetworkCardsProps } from '@helpers/contacto';
import { IContactPage } from '@interfaces/app/IContactPage';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Networks = ({ socialNetworks }: Pick<IContactPage, 'socialNetworks'>) => {
  const title = socialNetworks?.title?.split('*');

  return (
    <div className="networks__container">
      <h1 className="networks__container__title">
        {title?.[0]} <span>{title?.[1]}</span> {title?.[2]}
      </h1>
      <div className="networks__container__carrousel">
        <Carousel
          {...CarouselNetworkCardsProps}
          Element={NetworkCard}
          data={
            socialNetworks?.networks?.map((network) => ({
              icon: contactPageIcons[
                (network.icon || 'redOutlinedMail') as keyof typeof contactPageIcons
              ],
              title: network.title || '',
              description:
                network.description?.split('\\n').map((subDescription, index) => (
                  <Fragment key={index}>
                    {subDescription}
                    <br />
                  </Fragment>
                )) || '',
              link: network.redirection?.includes('#')
                ? {
                    onClick: () => {
                      gsap.to(window, { duration: 0.7, scrollTo: network.redirection || '' });
                    },
                  }
                : {
                    href: network.redirection || '',
                    target: '_blank',
                  },
            })) || []
          }
          modules={[SwiperModules.Pagination, SwiperModules.Navigation]}
        />
      </div>
    </div>
  );
};
