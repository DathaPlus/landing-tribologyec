'use client';
import React from 'react';
import { IKnowus } from '@interfaces/app/IAboutusPage';

export const KnowUs: React.FC<IKnowus> = (parameters: IKnowus): React.JSX.Element => {
  return (
    <div className="container_solutions_aboutus">
      <div className="container_solutions_description_aboutus">
        <p className="solutions_subtitle_aboutus">{parameters?.subtitleKnowUs}</p>
        <p className="solutions_description_aboutus">{parameters?.descriptionKnowUs}</p>
      </div>
    </div>
  );
};
