import React from 'react';
import project5 from '../../../../static/img/projects/project_5.png';
import project5Mobile from '../../../../static/img/projects/project_5_mobile.png';

export const SolutionsCenter = () => {
  return (
    <div className="container_solutions">
      <p className="title_center_solutions">CENTRO DE <br/><span>SOLUCIONES</span></p>
      <div className="container_solutions_description">
        <p className="title_center_solutions_mobile">CENTRO DE <br/><span>SOLUCIONES</span></p>
        <p className="solutions_subtitle">Centro de Soluciones</p>
        <p className="solutions_description">
          Nos adaptamos a sus requerimientos mediante un trabajo
          en conjunto para integrar habilidades y destrezas en
          base a la mejora, prevención y seguridad empresarial.
        </p>
        <button>Contáctanos</button>
      </div>
      <div className="container_image_center_solutions">
        <img id="project5" src={project5} alt="project5" />
        <img id="project5Mobile" src={project5Mobile} alt="project5" />
      </div>
    </div>
  );
};

export default SolutionsCenter;
