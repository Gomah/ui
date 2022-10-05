import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: 'sm' | 'md';

  colour?: InputColour;
}

const styles = /*tw*/ {
  size: {
    sm: 'py-2 px-3',
    md: 'py-2.5 px-3.5',
  },

  colour: {
    gray: {
      default: 'border-gray-300 focus:border-gray-300 focus:ring-gray-100',
    },
    primary: {
      default: 'border-gray-300 focus:border-primary-300 focus:ring-primary-100',
    },
    error: {
      default: 'border-error-300 focus:border-error-300 focus:ring-error-100',
    },
  },

  shadow: 'shadow-xs',
};

export type InputSize = keyof typeof styles.size;
export type InputColour = keyof typeof styles.colour;

export const Input = React.forwardRef<HTMLInputElement, React.PropsWithRef<InputProps>>(
  ({ children, className, colour = 'gray', type = 'text', size = 'md', ...props }, ref) => {
    const inputClasses = twMerge(
      'text-gray-900 placeholder-gray-500',
      clsx(
        'focus:ring-4',
        styles.size[size],
        styles.colour[colour].default,
        styles.shadow,
        'block rounded-md w-full'
      ),
      className
    );

    return <input ref={ref} type={type} {...props} className={inputClasses} />;
  }
);

Input.displayName = 'Input';
