import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { link, LinkVariants } from './Link.css';

export type LinkProps = React.ComponentPropsWithRef<'a'> & LinkVariants;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ size = 'md', weight = 'regular', className, intent = 'primary', children, ...props }, ref) => {
    const textClass = twMerge(link({ size, weight, intent }), className);

    return (
      <a ref={ref} {...props} className={textClass}>
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
