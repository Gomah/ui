import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const styles = /*tw*/ {
  size: {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  },

  variant: {
    primary: 'border-gray-300 text-primary-600 focus:ring-primary-500',
  },
};

type CheckboxSize = keyof typeof styles.size;
type CheckboxVariant = keyof typeof styles.variant;

export interface CheckboxProps extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: CheckboxSize;

  variant?: CheckboxVariant;
}

const Checkbox = React.forwardRef<HTMLInputElement, React.PropsWithRef<CheckboxProps>>(
  ({ className, size = 'md', variant = 'primary', ...props }, ref) => {
    const checkboxClasses = twMerge(
      clsx('rounded', styles.size[size], styles.variant[variant]),
      className
    );

    return <input ref={ref} {...props} type="checkbox" className={checkboxClasses} />;
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
