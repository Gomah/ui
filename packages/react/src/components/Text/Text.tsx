import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { text, TextVariants } from './Text.css';

export type TextProps = React.ComponentPropsWithRef<'p'> & TextVariants;

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = 'md', weight = 'regular', className, children, ...props }, ref) => {
    const textClass = twMerge(
      text({
        size,
        weight,
      }),
      className
    );

    return (
      <p ref={ref} {...props} className={textClass}>
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';
