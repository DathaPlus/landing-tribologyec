import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface INetworkCard {
  icon: string;
  title?: string | ReactNode;
  title2?: string | ReactNode;
  description: string | ReactNode;
  link?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>;
}
