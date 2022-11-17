import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { heading, HeadingVariants } from './Heading.css';

export type HeadingProps = {
  level?: 1 | 2 | 3 | 5 | 6;
} & React.ComponentPropsWithRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> &
  HeadingVariants;

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 1, size = 'xs', weight = 'regular', className, ...props }, ref) => {
    const headingClass = twMerge(heading({ size, weight }), className);
    const Tag: HeadingTag = `h${level}`;

    return (
      <Tag ref={ref} {...props} className={headingClass}>
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';
