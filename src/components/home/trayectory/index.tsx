'use client';
import { trayectoryLogos } from '@data/home/trayectory';
import { useLayoutWidth } from '@dathaplus/storybook';
import React from 'react';
import { ITrajectoryHomeSection } from '@interfaces/home';

const Trajectory = (params: ITrajectoryHomeSection) => {
  const screenWidth = useLayoutWidth();

  return (
    <div className="home__trayectory">
      <div className="information__container">
        <div className="title__trayectory">
          <h2>TRAYECTORIA</h2>
        </div>
        <div className="content__trayectory">
          <div className="years__trayectory">
            <h2>07</h2>
            <h3>AÑOS</h3>
          </div>
          <div className="description__trayectory">
            <p>Somos una empresa que se adapta a las necesidades de cada cliente, integramos varios fabricantes para obtener el mejor producto dentro de la relación beneficio / costo, nuestro personal es entrenado y calificado para recomendar y solucionar problemas de empernado</p>
          </div>
        </div>
        {screenWidth > 900 && (
          <div className="client-logos">
            {trayectoryLogos.map((img, index) => (
              <img key={index} src={img.src} alt={img.alt} />
            ))}
          </div>
        )}
      </div>
      {screenWidth <= 900 && (
        <div className="client-logos">
          {trayectoryLogos.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Trajectory;
