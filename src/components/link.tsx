import { Link } from 'gatsby';
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
      <Link to={href ?? ''} {...internalProps}>
        {children}
      </Link>
    ) : (
      <a href={href} {...externalProps}>
        {children}
      </a>
    )}
  </>
);
