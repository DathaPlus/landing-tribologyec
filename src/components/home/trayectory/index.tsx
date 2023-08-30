'use client';
import { trayectoryLogos } from '@data/home/trayectory';
import { useLayoutWidth } from '@dathaplus/storybook';
import React from 'react';
import {ITrajectoryHomeSection} from "@interfaces/home";

const Trayectory = (params: ITrajectoryHomeSection) => {
  const screenWidth = useLayoutWidth();

  return (
    <div className="home__trayectory">
      <div className="information__container">
        <div className="title__trayectory">
          <h2>{params?.title}</h2>
        </div>
        <div className="content__trayectory">
          <div className="years__trayectory">
            <h2>{params?.years}</h2>
            <h3>AÑOS</h3>
          </div>
          <div className="description__trayectory">
            <p>
              {params?.description}
            </p>
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

export default Trayectory;
