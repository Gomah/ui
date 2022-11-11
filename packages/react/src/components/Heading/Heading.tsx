import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { heading, HeadingVariants } from './Heading.css';

export type HeadingProps = React.ComponentPropsWithRef<'h1'> & HeadingVariants;

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, size = 'xs', weight = 'regular', className, ...props }, ref) => {
    const headingClass = twMerge(heading({ size, weight }), className);

    return (
      <h1 ref={ref} {...props} className={headingClass}>
        {children}
      </h1>
    );
  }
);

Heading.displayName = 'Heading';
