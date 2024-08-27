import whiteOutlinedPointer from '@assets/img/icons/white-outlined-pointer.svg';
import whiteOutlinedHands from '@assets/img/icons/white-outlined-hands.svg';
import whiteOutlinedStars from '@assets/img/icons/white-outlined-stars.svg';
import {IGoalsAboutus} from "@interfaces/app/IAboutusPage";

export const goalsPageIcons = {
  whiteOutlinedPointer: whiteOutlinedPointer,
  whiteOutlinedHands: whiteOutlinedHands,
  whiteOutlinedStars: whiteOutlinedStars,
};

export const carouselAbout: IGoalsAboutus[] = [
  {
    icon: {
      name: "crosshair"
    },
    title: "¿Cómo logramos nuestros objetivos?",
    description: "Años de experiencia nos han permitido establecer procesos de calidad en cada uno de nuestros servicios lo que nos ha permitido ser rápidos, objetivos, estratégicos e innovadores obteniendo excelentes y duraderos resultados.",
    information: "¡Mantenemos estándares altos de trabajo!",
  },
  {
    icon: {
      name: "user-check"
    },
    title: "Nuesrto compromiso",
    description: "Nos comprometemos a ofrecer bienes y servicios de la más alta calidad, diseñados para superar las expectativas de nuestros clientes. Aspiramos a ser un referente en excelencia, brindando soluciones tope de gama que reflejen nuestros valores.",
    information: "¡Cuidamos tu marca y la repotenciamos!",
  },
  {
    icon: {
      name: "sunrise"
    },
    title: "¿Cómo visualizamos nuestro futuro?",
    description: "Nos visualizamos como líderes globales, siendo reconocidos como la voz del torque controlado a nivel internacional. Aspiramos a establecer un estándar de excelencia en la industria, llevando nuestras soluciones y conocimientos especializados a nuevos mercados y consolidando nuestra presencia en el ámbito global.",
    information: "¡Nos reinventamos hacia el futuro!",
  }
];
