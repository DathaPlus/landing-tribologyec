import React, { FC } from 'react';

import { ILink } from '../interfaces/link';

export const LinkCustom: FC<ILink> = ({
  type = 'internal',
  href,
  children,
  externalProps,
  internalProps,
}) => (
  <>
    {type === 'internal' ? (
      <a href={href} {...internalProps}>
        {children}
      </a>
    ) : (
      <a href={href} {...externalProps}>
        {children}
      </a>
    )}
  </>
);
