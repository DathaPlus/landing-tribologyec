'use client';

import { Carousel,  Icon } from '@dathaplus/storybook';
import Evotorque from '@assets/img/tools/03.png';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react';
import { carrouselImageProps } from '@helpers/products';
const ProductImage = (img: StaticImport) => (
  <Image src={img} alt="evotorque" className="product_detail__image" />
);

export const AditionalInfo = () => {
  return (
    <>
      <div className="product_detail">
        <p className="detail-products__title product_detail__title">
          <span>Evotorque</span>
          <span>EBT-80-2700</span>
        </p>
        <div className="product_detail__container">
          <Carousel
            Element={ProductImage}
            data={[Evotorque, Evotorque, Evotorque]}
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
                <td>6.8 kg</td>
              </tr>
              <tr>
                <td>Marca</td>
                <td>Norbar</td>
              </tr>
              <tr>
                <td>Modelo</td>
                <td>EBT-80-2700</td>
              </tr>
              <tr>
                <td>Capacidad</td>
                <td>676-2700[Nm]</td>
              </tr>
              <tr>
                <td>Certificación</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>Precisión</td>
                <td>+/- 3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
