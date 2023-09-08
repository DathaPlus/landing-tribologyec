import { AnchorHTMLAttributes, DOMAttributes } from 'react';

type DOM = DOMAttributes<AnchorHTMLAttributes<HTMLAnchorElement>> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export interface ILink extends Partial<Pick<DOM, 'href' | 'children'>> {
  type?: 'internal' | 'external';
  internalProps?: Omit<DOM, 'href' | 'href' | 'children'>;
  externalProps?: Omit<DOM, 'href' | 'href' | 'children'>;
}
