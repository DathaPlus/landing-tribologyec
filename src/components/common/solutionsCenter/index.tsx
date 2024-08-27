'use client';
import React from 'react';
import Image from 'next/image';
import project5Mobile from '@assets/img/projects/project_5_mobile.png';
import { ISolutionsCenter } from '@interfaces/common/ISolutionsCenter';

export const SolutionsCenter: React.FC<ISolutionsCenter> = (
  
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
      <p className="solutions_description"></p>
      
    </div>
    <div className="container_image_center_solutions">
      <Image id="project5" src={project5Mobile} alt="project5" />
      <Image id="project5Mobile" src={project5Mobile} alt="project5" />
    </div>
  </div>
);
