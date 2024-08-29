import { ICard } from '@interfaces/common/ICard';

import capacitacion from 'public/servicios/Capacitacion.png'
import auditoria from 'public/servicios/Auditoria.png'
import calibracion from 'public/servicios/calibracion.png'

export const listCardsProject: ICard[] = [
  {
    img: capacitacion.src,
    title: 'CAPACITACIÓN',
    description:
      'Formamos equipos competentes para resolver problemas que presentan las juntas empernadas',
    link: {
      href: 'https://www.google.com.ec',
      type: 'external',
      externalProps: {
        target: '_blank',
        rel: 'noreferrer',
      },
    },
  },
  {
    img: auditoria.src,
    title: 'AUDITORIA DE JUNTAS\nEMPERNADAS',
    description:
      'Verificación precisa de juntas atornilladas preapretadas entre 1 - 7000 N.m',
    link: {
      href: 'https://www.google.com.ec',
      type: 'external',
      externalProps: {
        target: '_blank',
        rel: 'noreferrer',
      },
    },
  },
  {
    img: calibracion.src,
    title: 'Calibración de\nherramientas de Torque',
    description:
      'Formamos equipos competentes para resolver problemas que presentan las juntas empernadas',
    link: {
      href: 'https://www.google.com.ec',
      type: 'external',
      externalProps: {
        target: '_blank',
        rel: 'noreferrer',
      },
    },
  }
  
];
