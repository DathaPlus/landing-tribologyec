'use client';
import React from 'react';
import Image from 'next/image';
import project5Desktop from '@assets/img/about_us/aboutus_solution_center_desktop.png';
import project5Mobile from '@assets/img/about_us/aboutus_solution_center_mobile.png';
import { ISolutionsCenter } from '@interfaces/common/ISolutionsCenter';

export const SolutionsCenter: React.FC<ISolutionsCenter> = () => (
  <div className="container_solutions">
    <div className="title_center_solutions">
      CENTRO DE <br />
      <span>SOLUCIONES</span>
    </div>
    <div className="container_solutions_description">
      <div className="title_center_solutions_mobile">
        CENTRO DE <br />
        <span>SOLUCIONES</span>
      </div> 
      <p className="solutions_description">Estamos en capacidad de especializar técnicos en Diseño y Comportamiento de juntas empernadas, potenciamos las habilidades con herramientas, procedimientos y técnicas para eliminar fuentes de incertidumbre</p>
    </div>
    <div className="container_image_center_solutions">
      <Image id="project5" src={project5Desktop} alt="project5" />
      <Image id="project5Mobile" src={project5Mobile} alt="project5" />
    </div>
  </div>
);
