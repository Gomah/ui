import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { tag, TagVariants } from './Tag.css';

export type TagProps = React.ComponentPropsWithRef<'div'> & TagVariants;

export const Tag = React.forwardRef<HTMLParagraphElement, TagProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    const textClass = twMerge(tag({ size }), className);

    return (
      <div ref={ref} {...props} className={textClass}>
        {children}
      </div>
    );
  }
);

Tag.displayName = 'Tag';
