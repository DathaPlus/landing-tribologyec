import { ICardProduct } from '@interfaces/home'; 
import image1 from 'public/marcas/image1.png'
import image2 from 'public/marcas/image2.png'
import image3 from 'public/marcas/image3.png'
import image4 from 'public/marcas/image4.png'
import image5 from 'public/marcas/image5.png'
import image6 from 'public/marcas/image6.png'
import image7 from 'public/marcas/image7.png'
import image8 from 'public/marcas/image8.png'

export const productos: ICardProduct[] = [
  {
    category: "Norbar",
    img: image1.src, 
    link: { href: "https://www.google.com" },
    description: "Catálogo de Productos",
  },
  {
    category: "FasTorq",
    img: image2.src, 
    link: { href: "https://www.google.com"},
    description: "Catálogo de Productos",
  },
  {
    category: "Herramientas Tone",
    img: image3.src, 
    link: { href: "https://www.google.com"},
    description: "Catálogo de Productos",
  },
  {
    category: "Snap-on",
    img: image4.src, 
    link: { href: "https://www.google.com" },
    description: "Catálogo de Productos",
  },
  {
    category: "Gedore Solutions",
    img: image5.src, 
    link: { href: "https://www.google.com" },
    description: "Catálogo de Productos",
  },
  {
    category: "Momento",
    img: image6.src, 
    link: { href: "https://www.google.com" },
    description: "Catálogo de Productos",
  },
  {
    category: "Durofix",
    img: image7.src, 
    link: { href: "https://www.google.com" },
    description: "Catálogo de Productos",
  },
  {
    category: "Sturtevant Richmont",
    img: image8.src, 
    link: { href: "https://www.google.com" },
    description: "Catálogo de Productos",
  },
];