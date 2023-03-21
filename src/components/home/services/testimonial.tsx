import { IServiceTestimonial } from '@interfaces/services';
import React, { FC } from 'react';

export const TestimonialService: FC<IServiceTestimonial> = ({ message, name }) => {
  return (
    <p className="services__testimonial">
      <q>{message}</q>
      <strong>{name}</strong>
    </p>
  );
};
