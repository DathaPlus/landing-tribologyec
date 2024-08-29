'use client';
import React from 'react';
import { HeroProps } from "@interfaces/base/layout/HeroProps";

export const Hero2: React.FC<HeroProps> = (
    {
    image,
    title,
    buttonText,
    style,
    description ,
  }) : React.JSX.Element => (
    <div className="hero2" style={{ backgroundImage: `url(${image})`, height: style?.height, backgroundColor: "#4B4F58" }}>
      <div className="hero2__content" style={style}>
        <h1 className="hero2__title">{title}</h1>
        <span className="hero2__description">{description}</span>

        <button className='button'>{buttonText}</button>
      </div>
      
     
    </div>
  );