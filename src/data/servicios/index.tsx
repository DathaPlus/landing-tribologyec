import { ISolutionsCenter } from '@interfaces/common/ISolutionsCenter';
import servicios1 from 'public/servicios/about_us/aboutus_solution_center_desktop.png';
import servicios2 from 'public/servicios/about_us/aboutus_solution_center_mobile.png';
import { HeroProps } from '@interfaces/base/layout/HeroProps';
import capacitacion from '@assets/servicios/Capacitacion.png';
import auditoria from '@assets/servicios/Auditoria.png';
import calibracion from '@assets/servicios/calibracion.png';
import { IOurServices } from '@interfaces/app/IServicesPage';

export const dataServices: ISolutionsCenter = {
  title: 'CENTRO DE SOLUCIONES',
  subtitle: 'Asesoría y Soporte',
  description:
    'Estamos en capacidad de especializar técnicos en Diseño y Comportamiento de juntas empernadas, potenciamos las habilidades con herramientas, procedimientos y técnicas para eliminar fuentes de incertidumbre',
  buttonText: 'Comtactanos',
  imageDesktop: servicios1.src,
  imageMobile: servicios2.src,
};

export const heroDataservices: HeroProps = {
  title: 'Servicios',
  description:
    'Servicios especializados de aprietes controlados por rotación de tuerca con herramientas de torque combinadas con sistemas de medición de elongación de pernos',
};



export const carouselServiceData: IOurServices = {
  title: 'NUESTROS',
  subtitle: 'SERVICIOS',
  services: [
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
      description: 'Verificación precisa de juntas atornilladas preapretadas entre 1 - 7000 N.m',
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
    },
  ],
};
