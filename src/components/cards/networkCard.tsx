'use client';
import React from 'react';
import Image from 'next/image';
import { INetworkCard } from '@interfaces/cards/INetworkCard';

export const NetworkCard = ({ icon, title, description }: INetworkCard) => {
  return (
    <div className="networks__card">
      <Image src={icon} alt="icon-networks" width={64} height={64} />
      <p className="networks__card-title">{title}</p>
      <p className="networks__card-subtitle">{description}</p>
    </div>
  );
};
