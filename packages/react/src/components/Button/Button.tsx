import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Ring } from '@uiball/loaders';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  children?: React.ReactNode;

  /**
   * Leading icon
   */
  leadingIcon?: React.ReactNode;

  /**
   * Trailing icon
   * @usage <Button trailingIcon={<}></Button>
   */
  trailingIcon?: React.ReactNode;

  /**
   * Defines size of the button
   */
  size?: ButtonSize;

  /**
   * Defines variant of the button
   */
  variant?: ButtonVariant;

  /**
   * Rounded button
   */
  rounded?: boolean;

  /**
   * Loading state
   */
  loading?: boolean;
}

const styles = /*tw*/ {
  size: {
    sm: 'py-2 px-3.5 text-sm',
    md: 'py-2.5 px-4 text-sm',
    lg: 'py-2.5 px-[18px] text-base',
    xl: 'py-3 px-5 text-base',
    '2xl': 'py-4 px-7 text-lg',
  },

  variant: {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 disabled:bg-blue-200',
    secondary: 'bg-primary-50 text-primary-700 hover:bg-primary-100',
    error: 'bg-error-600 text-white hover:bg-error-700',
    warning: 'bg-warning-600 text-white hover:bg-warning-700',
    success: 'bg-success-600 text-white hover:bg-success-700',
  },
};

export type ButtonSize = keyof typeof styles.size;
export type ButtonVariant = keyof typeof styles.variant;

export const Button = React.forwardRef<React.ComponentPropsWithRef<'button'>, ButtonProps>(
  (
    {
      children,
      className = '',
      size = 'md',
      leadingIcon,
      loading,
      trailingIcon,
      variant = 'primary',
      rounded,
      ...props
    },
    ref
  ) => {
    const buttonClasses = twMerge(
      clsx(
        // Apply variant
        styles.variant[variant],
        // Apply size
        styles.size[size],
        rounded ? 'rounded-full' : 'rounded-lg',
        !!leadingIcon || !!trailingIcon ? 'inline-flex items-center space-x-2' : '',
        'shadow-xs'
      ),
      className
    );

    return (
      <button ref={ref} {...props} className={buttonClasses}>
        {loading ? (
          <Ring size={20} lineWeight={4} speed={2} color="currentColor" />
        ) : leadingIcon || trailingIcon ? (
          <>
            {leadingIcon && <span>{leadingIcon}</span>}
            <span>{children}</span>
            {trailingIcon && <span>{trailingIcon}</span>}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
