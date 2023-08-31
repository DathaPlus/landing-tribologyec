import React from 'react';
import { INetworkCard } from '@interfaces/cards/INetworkCard';
import redOutlinedMail from '@assets/img/icons/red-outlined-mail.svg';
import redOutlinedWhatsapp from '@assets/img/icons/red-outlined-whatsapp.svg';
import redOutlinedCCall from '@assets/img/icons/red-outlined-call.svg';
import redOutlinedPaper from '@assets/img/icons/red-outlined-paper.svg';

export const networksCardsData: INetworkCard[] = [
  {
    icon: redOutlinedMail,
    title: 'Correo',
    description: (
      <>
        Envíanos un email a: <br /> ventas@tribologyec.com
      </>
    ),
  },
  {
    icon: redOutlinedWhatsapp,
    title: 'Whatsapp',
    description: 'Escríbenos directamente vía Whatsapp',
  },
  {
    icon: redOutlinedCCall,
    title: 'Teléfono',
    description: 'Llama a nuestros expertos',
  },
  {
    icon: redOutlinedPaper,
    title: 'Trabajo',
    description: 'Trabaja con nosotros',
  },
];
