'use client';
import React from 'react';
import { Carousel, Icon } from '@dathaplus/storybook';
import { AboutusCard } from '@components/cards';
import { Navigation, Pagination } from 'swiper';
import whiteOutlinedPointer from '@assets/img/icons/white-outlined-pointer.svg';
import { CarouselAboutusCardsProps } from '@helpers/aboutus';
import whiteOutlinedHands from '@assets/img/icons/white-outlined-hands.svg';
import whiteOutlinedStars from '@assets/img/icons/white-outlined-stars.svg';

export const AboutusCarousel = () => {
  
  return (
    <div className="aboutus__container">
      <div className="aboutus__container__carrousel">
        <Carousel
          {...CarouselAboutusCardsProps}
          Element={AboutusCard}
          data={
            [{icon: whiteOutlinedPointer.src,
              title: "¿Cómo logramos nuestros objetivos?",
              description: "Años de experiencia nos han permitido establecer procesos de calidad en cada uno de nuestros servicios lo que nos ha permitido ser rápidos, objetivos, estratégicos e innovadores obteniendo excelentes y duraderos resultados.",
              information: "¡Mantenemos estándares altos de trabajo!"
            },
            {icon: whiteOutlinedHands.src,
              title: "Nuestro compromiso",
              description: "No solo brindamos servicios estratégicos en Talento Humano siendo especialistas en reclutamiento y selección. En especial, somos encargados de diseñar equipos de trabajo que transmitan valor, confianza y reflejen los valores de identifican la marca de nuestros clientes.",
              information: "¡Cuidamos tu marca y la repotenciamos!"
            },
            {icon: whiteOutlinedStars.src,
              title: "¿Cómo visualizamos nuestro futuro?",
              description: "Conocemos ampliamente el dinamismo de nuestros públicos objetivos, por lo que nuestra visión se enfoca en innovar constantemente en nuestros servicios y en la visión del talento en el mercado Ecuatoriano y de Latinoamérica. Nos visualizamos en un futuro inmediato ayudando a despegar a más empresas Ecuatorianas y fortaleciando a más mepresas multinacionales.",
              information: "¡Nos reinventamos hacia el futuro!"
            },
            {icon: whiteOutlinedPointer.src,
              title: "¿Cómo logramos nuestros objetivos?",
              description: "Años de experiencia nos han permitido establecer procesos de calidad en cada uno de nuestros servicios lo que nos ha permitido ser rápidos, objetivos, estratégicos e innovadores obteniendo excelentes y duraderos resultados.",
              information: "¡Mantenemos estándares altos de trabajo!"
            }
          ]
          }
          modules={[Pagination, Navigation]}
        />
        <div className="aboutus__arrow_wrapper_left" id="aboutus_arrow_left">
              <Icon name="arrow-left-circle" />
            </div>
            <div className="aboutus__arrow_wrapper_right" id="product_arrow_right">
              <Icon name="arrow-right-circle" />
            </div>
      </div>
    </div>
  );
};
