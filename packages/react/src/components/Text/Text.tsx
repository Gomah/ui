import * as React from 'react';
import clsx from 'clsx';

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

export type TextSize = keyof typeof styles.size;
export type TextWeight = keyof typeof styles.weight;

export interface TextProps extends React.ComponentPropsWithRef<'p'> {
  size?: TextSize;
  weight?: TextWeight;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = 'md', weight = 'regular', className, children, ...props }, ref) => {
    const textClass = clsx('text-gray-600', styles.size[size], styles.weight[weight], className);

    return (
      <p ref={ref} {...props} className={textClass}>
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';
