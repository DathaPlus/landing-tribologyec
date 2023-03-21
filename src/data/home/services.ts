import { IHomeServices, IServiceTestimonial } from '@interfaces/home';

export const listServices: IHomeServices[] = [
  {
    icon: {
      name: 'star',
      size: 30,
      svg: {
        stroke: '#fff',
      },
    },
    title: 'Servicios Post: Venta',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: {
      name: 'play',
      size: 30,
      svg: {
        stroke: '#fff',
      },
    },
    title: 'Servicio de Medición de Longación en pernos',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: {
      name: 'settings',
      size: 30,
      svg: {
        stroke: '#fff',
      },
    },
    title: 'Entrenamiento',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: {
      name: 'shield',
      size: 30,
      svg: {
        stroke: '#fff',
      },
    },
    title: 'Servicios de aplicación de torque',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export const serviceTestimonial: IServiceTestimonial[] = [
  {
    name: 'juan perez',
    message:
      'Son una empresa excelente, reseña de mínimo 5 líneas con opiniones fuertes y convincentes. Y lo suficientemente largas para que puedan llenar el espacio adecuado.',
  },
  {
    name: 'adriana smith',
    message:
      'Son una empresa excelente, reseña de mínimo 5 líneas con opiniones fuertes y convincentes. Y lo suficientemente largas para que puedan llenar el espacio adecuado.',
  },
  {
    name: 'andres garcia',
    message:
      'Son una empresa excelente, reseña de mínimo 5 líneas con opiniones fuertes y convincentes. Y lo suficientemente largas para que puedan llenar el espacio adecuado.',
  },
  {
    name: 'mia lopez',
    message:
      'Son una empresa excelente, reseña de mínimo 5 líneas con opiniones fuertes y convincentes. Y lo suficientemente largas para que puedan llenar el espacio adecuado.',
  },
  {
    name: 'Luke Lambert',
    message:
      'Son una empresa excelente, reseña de mínimo 5 líneas con opiniones fuertes y convincentes. Y lo suficientemente largas para que puedan llenar el espacio adecuado.',
  },
];
