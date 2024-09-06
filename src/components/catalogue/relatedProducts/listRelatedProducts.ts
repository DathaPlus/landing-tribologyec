import {ICardProduct} from "@interfaces/home";
import image1 from 'public/marcas/norbar_marca.webp'

export const listRelatedProducts: ICardProduct[] = [
    {
        category:"HERRAMIENTAS",
        img: image1.src,
        link: {href: "https://www.google.com" },
        description:"Llave de Torque PRO 650, Espiga 22"
    },
    {
        category:"HERRAMIENTAS",
        img: image1.src,
        link: {href: "https://www.google.com" },
        description:"Llave de Torque PRO 650, ¾”"
    },
    {
        category:"HERRAMIENTAS",
        img: image1.src,
        link: {href: "https://www.google.com" },
        description:"Llave de Torque 6R"
    },
    {
        category:"Digital",
        img: image1.src,
        link: {href: "https://www.google.com" },
        description:"Llave de Torque 4AR, 3/4″"
    },
]