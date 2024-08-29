'use client';
import React from 'react';
import { IGoalsAboutus } from '@interfaces/app/IAboutusPage';
import {Icon} from "@dathaplus/storybook";

export const ProductCard = ({icon, title, description,information}:IGoalsAboutus) => {
  return (
    <div className="card_aboutus_container">
      <div className="card_aboutus">
        <Icon type={"feather"} name={icon.name} size={50}/>
        <br/>
        <h2 className="aboutus__card-title">{title}</h2>
        <br/>
        <p className="aboutus__card-description">
          {description}
        </p>
        <br/>
        <p className="aboutus__card-information">
          {information}
        </p>
      </div>
    </div>
  );
};