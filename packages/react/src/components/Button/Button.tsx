import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Ring } from '@uiball/loaders';
import type { ReactTag } from '@headlessui/react/dist/types';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * Leading icon
   * @usage <Button leadingIcon={<Home className="h-4 w-4" />}>Button</Button>
   */
  leadingIcon?: React.ReactNode;

  as?: ReactTag;

  /**
   * Trailing icon
   * @usage <Button trailingIcon={<Home className="h-4 w-4" />}>Button</Button>
   */
  trailingIcon?: React.ReactNode;

  /**
   * Defines size of the button
   * @usage <Button size="sm">Button</Button>
   */
  size?: ButtonSize;

  /**
   * Defines variant of the button
   * @usage <Button variant="primary">Button</Button>
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

  /**
   * Full width?
   */
  fullWidth?: boolean;
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

  shadow: 'shadow-xs',
};

export type ButtonSize = keyof typeof styles.size;
export type ButtonVariant = keyof typeof styles.variant;

export const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      className,
      size = 'md',
      leadingIcon,
      loading,
      trailingIcon,
      fullWidth,
      variant = 'primary',
      rounded,
      ...props
    },
    ref
  ) => {
    const buttonClasses = twMerge(
      clsx(
        styles.variant[variant], // Apply variant style
        styles.size[size], // Apply size style
        rounded ? 'rounded-full' : 'rounded-lg',
        !!leadingIcon || !!trailingIcon ? 'inline-flex items-center space-x-2' : '',
        styles.shadow, // Apply shadow
        fullWidth && 'w-full',
        'font-medium'
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
