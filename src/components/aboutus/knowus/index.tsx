'use client';
import React from 'react';
import { IKnowus } from '@interfaces/app/IAboutusPage';

export const KnowUs: React.FC<IKnowus> = (parameters: IKnowus): React.JSX.Element => {
  return (
    <div className="container_solutions_aboutus">
      <div className="container_solutions_description_aboutus">
        <p className="solutions_subtitle_aboutus">¿Quiénes Somos?</p>
        <p className="solutions_description_aboutus">Apoyamos a los departamentos de ingeniería y mantenimiento de las industrias del país, comercializando bienes y servicios que permiten mantener y mejorar los índices de confiabilidad de las uniones empernadas en armonía con los objetivos técnicos y económicos de cada cliente.</p>
      </div>
    </div>
  );
};
