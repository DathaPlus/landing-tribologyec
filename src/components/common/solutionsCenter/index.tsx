'use client';
import React from 'react';
import Image from 'next/image';
import project5Mobile from '@assets/img/projects/project_5_mobile.png';
import { ISolutionsCenter } from '@interfaces/common/ISolutionsCenter';

export const SolutionsCenter: React.FC<ISolutionsCenter> = (
  parameters: ISolutionsCenter,
): React.JSX.Element => (
  <div className="container_solutions">
    <p className="title_center_solutions">
      CENTRO DE <br />
      <span>SOLUCIONES</span>
    </p>
    <div className="container_solutions_description">
      <p className="title_center_solutions_mobile">
        CENTRO DE <br />
        <span>SOLUCIONES</span>
      </p>
      <p className="solutions_subtitle">{parameters?.subtitle}</p>
      <p className="solutions_description">{parameters?.description}</p>
      {parameters?.buttonText && <button>{parameters?.buttonText}</button>}
    </div>
    <div className="container_image_center_solutions">
      <Image id="project5" src={project5Mobile} alt="project5" />
      <Image id="project5Mobile" src={project5Mobile} alt="project5" />
    </div>
  </div>
);
