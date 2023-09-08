'use client';
import React from 'react';
import Image from 'next/image';
import project5 from '@assets/img/projects/project_5.png';
import project5Mobile from '@assets/img/projects/project_5_mobile.png';

export const KnowUs = () => {
  return (
    <div className="container_solutions_aboutus">
      <div className="container_solutions_description_aboutus">
        <p className="solutions_subtitle_aboutus">¿Quiénes Somos?</p>
        <p className="solutions_description">
        Apoyamos a los departamentos de ingeniería y mantenimiento de las industrias del país,
        comercializando bienes y servicios que permiten mantener y mejorar los índices de confiabilidad de las uniones empernadas
        en armonía con los objetivos técnicos y económicos de cada cliente.
        </p>
      </div>
    </div>
  );
};

export default KnowUs;
