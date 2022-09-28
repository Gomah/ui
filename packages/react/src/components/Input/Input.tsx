import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: 'sm' | 'md';
}

const styles = /*tw*/ {
  size: {
    sm: 'py-2 px-3',
    md: 'py-2.5 px-3.5',
  },

  variant: {
    gray: {
      default: 'border-gray-300 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500',
    },
    primary: {
      default: 'border-gray-300 focus:border-primary-600 focus:ring-primary-600',
    },
    error: {
      default: 'border-error-50 text-error-700',
    },
    warning: {
      default: 'border-warning-50 text-warning-700',
    },
    success: {
      default: 'border-success-50 text-success-700',
    },
  },

  shadow: 'shadow-xs',
};

export type InputSize = keyof typeof styles.size;
export type InputVariant = keyof typeof styles.variant;

export const Input = React.forwardRef<HTMLInputElement, React.PropsWithRef<InputProps>>(
  ({ children, className, type = 'text', size = 'md', ...props }, ref) => {
    const inputClasses = twMerge(
      clsx(
        styles.size[size],
        styles.variant.primary.default,
        styles.shadow,
        'block rounded-md w-full'
      ),
      className
    );

    return <input type={type} ref={ref} {...props} className={inputClasses} />;
  }
);

Input.displayName = 'Input';
