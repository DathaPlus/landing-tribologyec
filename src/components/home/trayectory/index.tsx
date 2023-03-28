import React from "react";
import { useLayoutWidth } from "@dathaplus/storybook";
import { trayectoryLogos } from "@data/home/trayectory";

const Trayectory = () => {
  const screenWidth = useLayoutWidth();
  return (
    <div className="home__trayectory">
      <div className="information__container">
        <div className="title__trayectory">
          <h2>TRAYECTORIA</h2>
        </div>
        <div className="content__trayectory">
          <div className="years__trayectory">
            <h2>12</h2>
            <h3>AÑOS</h3>
          </div>
          <div className="description__trayectory">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur totam rerum commodi officiis, minus distinctio
              pariatur nostrum mollitia sint iure voluptate saepe laudantium,
              autem quod aspernatur illo praesentium numquam hic.
            </p>
          </div>
        </div>
        {screenWidth>900&&<div className="client-logos">
          {trayectoryLogos.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt}/>
          ))}
        </div>}
      </div>
      {screenWidth<=900&&<div className="client-logos">
        {trayectoryLogos.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt}/>
        ))}
      </div>}
    </div>
  );
};

export default Trayectory;
