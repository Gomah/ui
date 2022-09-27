import clsx from 'clsx';
import * as React from 'react';

const styles = /*tw*/ {
  size: {
    xs: 'text-2xl',
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl',
    '2xl': 'text-7xl',
  },

  weight: {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
};

export type HeadingSize = keyof typeof styles.size;
export type HeadingWeigh = keyof typeof styles.weight;

export interface HeadingProps extends React.ComponentPropsWithRef<'h1'> {
  size?: HeadingSize;
  weight?: HeadingWeigh;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, size = 'xs', weight = 'regular', className, ...props }, ref) => {
    const headingClass = clsx(styles.size[size], styles.weight[weight], className);

    return (
      <h1 ref={ref} {...props} className={headingClass}>
        {children}
      </h1>
    );
  }
);

Heading.displayName = 'Heading';
