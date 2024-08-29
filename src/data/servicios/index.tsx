import { ISolutionsCenter } from "@interfaces/common/ISolutionsCenter";
import servicios1 from 'public/servicios/about_us/aboutus_solution_center_desktop.png'
import servicios2 from 'public/servicios/about_us/aboutus_solution_center_mobile.png'
import {HeroProps} from '@interfaces/base/layout/HeroProps'

export const dataServices: ISolutionsCenter = {
    title: "CENTRO DE SOLUCIONES",
    subtitle: "Asesoría y Soporte",
    description: "Estamos en capacidad de especializar técnicos en Diseño y Comportamiento de juntas empernadas, potenciamos las habilidades con herramientas, procedimientos y técnicas para eliminar fuentes de incertidumbre",
    buttonText: "Comtactanos",
    imageDesktop: servicios1.src,
    imageMobile: servicios2.src,
  }

  export const heroDataservices: HeroProps = {

    title: "Servicios",
    description: "Servicios especializados de aprietes controlados por rotación de tuerca con herramientas de torque combinadas con sistemas de medición de elongación de pernos",

    
  }
  