import {
  ICardServiceProd,
  IHomeServicesProd,
  IServiceTestimonial,
} from '@interfaces/home';

export const listServices: ICardServiceProd[] = [
  {
    icon: {
      name: 'star',
      size: 30,
      svg: {
        stroke: '#fff',
      },
    },
    title: 'Servicios Post: Venta',
    desc: 'Mantenimiento y reparaciones para todas las herramientas de par torsional de las marcas que representamos. Alquiler de herramientas de torque desde 500 – 700.',
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
    desc: 'Herramientas de torque desde 500 hasta 20000.',
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
    desc: 'Para pernos desde 6 [mm] de diámetro y hasta 15 [m] de largo',
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
    desc: 'Diseño y fabricación de herramientas, accesorios, reacciones especiales.',
  },
];

export const allServices = ({
  className,
}: {
  className?: IHomeServicesProd['className'];
}): IHomeServicesProd[] => [
  {
    product: listServices,
    className,
  },
  {
    product: listServices,
    className,
  },
  {
    product: listServices,
    className,
  },
  {
    product: listServices,
    className,
  },
  {
    product: listServices,
    className,
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
