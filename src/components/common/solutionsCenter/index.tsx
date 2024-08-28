'use client';
import React from 'react';
import Image from 'next/image';
import { ISolutionsCenter } from '@interfaces/common/ISolutionsCenter';

export const SolutionsCenter: React.FC<ISolutionsCenter> = (
  parameters: ISolutionsCenter,
): React.JSX.Element => (
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
      <p className="solutions_description">{parameters?.description}</p>
      {parameters?.buttonText && <button>{parameters?.buttonText}</button>}
    </div>
    <div className="container_image_center_solutions">
      <Image id="project5" src={parameters.imageDesktop} width={715} height={550} alt="project5" />
      <Image id="project5Mobile" src={parameters.imageMobile} width={300} height={300} alt="project5" />
    </div>
  </div>
);
