import { ReactNode } from 'react';

export interface INetworkCard {
  icon: string;
  title: string | ReactNode;
  description: string | ReactNode;
}
