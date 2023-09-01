import React from 'react';
import { INetworkCard } from '@interfaces/cards/INetworkCard';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import redOutlinedMail from '@assets/img/icons/red-outlined-mail.svg';
import redOutlinedWhatsapp from '@assets/img/icons/red-outlined-whatsapp.svg';
import redOutlinedCCall from '@assets/img/icons/red-outlined-call.svg';
import redOutlinedPaper from '@assets/img/icons/red-outlined-paper.svg';

gsap.registerPlugin(ScrollToPlugin);

export const networksCardsData: INetworkCard[] = [
  {
    icon: redOutlinedMail,
    title: 'Correo',
    description: (
      <>
        Envíanos un email a: <br /> ventas@tribologyec.com
      </>
    ),
    link: {
      href: 'mailto:ventas@tribologyec.com',
      target: '_blank',
    },
  },
  {
    icon: redOutlinedWhatsapp,
    title: 'Whatsapp',
    description: 'Escríbenos directamente vía Whatsapp',
    link: {
      href: 'https://api.whatsapp.com/send?phone=593993645779',
      target: '_blank',
    },
  },
  {
    icon: redOutlinedCCall,
    title: 'Teléfono',
    description: 'Llama a nuestros expertos',
    link: {
      href: 'tel:+59323823894',
      target: '_blank',
    },
  },
  {
    icon: redOutlinedPaper,
    title: 'Formulario',
    description: 'Déjanos tus datos y te contactaremos',
    link: {
      onClick: () => {
        gsap.to(window, { duration: 0.7, scrollTo: '#form-contact-us-section' });
      },
    },
  },
];
