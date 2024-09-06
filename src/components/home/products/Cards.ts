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
    link: {
      type: "external",
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/Eep8cB8oL7pMq02Mw_E8vzoBSfcK9OgU2BdB02-riaIv6w",
      externalProps: {
        target: "_blank",
        rel: "noopener noreferrer",
        download: "Norbar_Catalogue_2024.pdf"
      }
    },
    description: "Catálogo de Productos"
  },
  
  {
    category: "FasTorq",
    img: image2.src, 
    link: { 
      type: "external",
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/ERx0B15plXpMpkuQS2S_tcYBQVHaJRLaVAC33gq4SWT1pA",
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
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/EfhxmeDrYFNOk386zXW_xagBHMapQcowozhBITH8NOaOwg",
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
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/EcgSx2JjalVLpYFNB9wtqT8BIOQk8GdZ7bT8giGjipMvpg",
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
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/ERLqzfTvUZ5OjNwmlz9r1OUBUHRnEyNe-jU_AyKCjSe2sQ",
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
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/EbynnfnHlBpPhqpResAuJ6IBJPWWkyrp_l2S_dudai0Syw",
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
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/EfcsUsJHtrlGq46mtEXt_JoBey4zhSO50EOsn0-xWJyRtA",
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
      href: "https://tribologyec-my.sharepoint.com/:b:/p/lmontalvan/EXzkS7iX2-lEueDmp_v_hOQB1G-cLpPQkcBLUypCG61oDQ",
      externalProps:{

        target: "_blank",
        rel: "noopener noreferrer", 
      },
    },
    description: "Catálogo de Productos",
  },
];