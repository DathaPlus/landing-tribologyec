import { ICardProduct } from '@interfaces/home'; 
import image1 from 'public/marcas/norbar_marca.webp'
import image2 from 'public/marcas/fastorq_marca.webp'
import image3 from 'public/marcas/herramientas_tone_marca.webp'
import image4 from 'public/marcas/snap-on-industrial_marca.webp'
import image5 from 'public/marcas/gedore_solutions_marca.webp'
import image6 from 'public/marcas/impact_sockets_marca.webp'
import image7 from 'public/marcas/durofix_marca.webp'
import image8 from 'public/marcas/Sturtevant-Richmont_1_marca.webp'
import image9 from 'public/marcas/superbolt-technology_marca.webp'

export const productos: ICardProduct[] = [
  {
    category: "Norbar",
    img: image1.src,
    link: {
      type: "external",
      href: "/files/Norbar_Catalogue_2024.pdf",
      externalProps: {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    },
    description: "Catálogo de Productos"
  },
  
  {
    category: "FasTorq",
    img: image2.src, 
    link: { 
      type: "external",
      href: "/files/Fastorq_Catalogo_2022.pdf",
      externalProps:{
        target: "_blank",
        rel: "noopener noreferrer"
      }
    },
    description: "Catálogo de Productos",
  },
  {
    category: "Herramientas Tone",
    img: image3.src, 
    link: { 
      type: "external",
      href: "/files/Catalogo_Herramientas_Tone.pdf",
      externalProps:{
        target: "_blank",
        rel: "noopener noreferrer",
    }
  },
    description: "Catálogo de Productos",
  },
  {
    category: "Snap-on",
    img: image4.src, 
    link: { 
      type: "external",
      href: "/files/Catalogo_Snapon_Español.pdf",
      externalProps:{

        target: "_blank",
        rel: "noopener noreferrer", 
      },
    },
    description: "Catálogo de Productos",
  },
  {
    category: "Gedore Solutions",
    img: image5.src, 
    link: { 
      type: "external",
      href: "/files/Catálogo Gedore Torque Solutions 2018.pdf",
      externalProps:{

        target: "_blank",
        rel: "noopener noreferrer", 
      },
    },
    description: "Catálogo de Productos",
  },
  {
    category: "Momento",
    img: image6.src, 
    link: { 
      type: "external",
      href: "/files/Catalogo_Momento_2020_Dados_Acc_Impacto.pdf",
      externalProps:{

        target: "_blank",
        rel: "noopener noreferrer", 
      },
    },
    description: "Catálogo de Productos",
  },
  {
    category: "Durofix",
    img: image7.src, 
    link: { 
      type: "external",
      href: "/files/pro-assembly-catalog-es-2023-02.pdf",
      externalProps:{

        target: "_blank",
        rel: "noopener noreferrer", 
      },
    },
    description: "Catálogo de Productos",
  },
  {
    category: "Sturtevant Richmont",
    img: image8.src, 
    link: { 
      type: "external",
      href: "/files/2022 SR Digital Catalog.pdf",
      externalProps:{

        target: "_blank",
        rel: "noopener noreferrer", 
      },
    },
    description: "Catálogo de Productos",
  },
  {
    category: "Superbolt Technology",
    img: image9.src,
    link: {
      type: "external",
      href: "/files/superbolt_full-range-brochure.pdf",
      externalProps:{

        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    description: "Catálogo de Productos",
  },
];
