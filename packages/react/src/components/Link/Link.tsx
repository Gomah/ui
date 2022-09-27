import * as React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const styles = /*tw*/ {
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  },
  weight: {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
};

export type LinkSize = keyof typeof styles.size;
export type LinkWeight = keyof typeof styles.weight;

export interface LinkProps extends React.ComponentPropsWithRef<'a'> {
  size?: LinkSize;
  weight?: LinkWeight;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ size = 'md', weight = 'regular', className, children, ...props }, ref) => {
    const textClass = twMerge(
      clsx('text-primary-600', styles.size[size], styles.weight[weight]),
      className
    );

    return (
      <a ref={ref} {...props} className={textClass}>
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
