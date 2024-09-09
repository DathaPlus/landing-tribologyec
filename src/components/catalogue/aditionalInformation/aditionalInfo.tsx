'use client';

import { Carousel, Icon } from '@dathaplus/storybook';
import Image from 'next/image';
import React from 'react';
import { IProductDetails } from "../../../app/productos/[slug]/page";
import { carrouselImageProps } from "@helpers/products";


interface AditionalInfoProps {
  details: IProductDetails;
}

export const AditionalInfo: React.FC<AditionalInfoProps> = ({ details }) => {
  const firstWord = details.model.split(' ')[0];
  const restOfModel = details.model.substring(firstWord.length);

  return (
    <>
      <div className="product_detail">
        <p className="detail-products__title product_detail__title">
          <span className="product-model-highlight">{firstWord}</span>
          <span className="product-model">{restOfModel}</span>
        </p>
        <div className="product_detail__container">
          <Carousel
            Element={(img) => (
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="product_detail__image"
              />
            )}
            data={details.images}
            {...carrouselImageProps}
          />
          <div className="product_detail__arrow_wrapper__left" id="product_detail_arrow_left">
            <Icon name="arrow-left-circle" size={40} />
          </div>
          <div className="product_detail__arrow_wrapper__right" id="product_detail_arrow_right">
            <Icon name="arrow-right-circle" size={40} />
          </div>
        </div>
      </div>

      <div className="additional-info">
        <div className="additional-info__container">
          <h3 className="additional-info__title">Información adicional</h3>

          <table className="additional-info__table">
            <tbody>
              <tr>
                <td>Peso</td>
                <td>{details.weight}</td>
              </tr>
              <tr>
                <td>Marca</td>
                <td>{details.brand}</td>
              </tr>
              <tr>
                <td>Modelo</td>
                <td>{details.model}</td>
              </tr>
              <tr>
                <td>Capacidad</td>
                <td>{details.capacity}</td>
              </tr>
              <tr>
                <td>Certificación</td>
                <td>{details.certification}</td>
              </tr>
              <tr>
                <td>Precisión</td>
                <td>{details.precision}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
