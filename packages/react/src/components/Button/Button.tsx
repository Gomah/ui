import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Ring } from '@uiball/loaders';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * Leading icon
   * @usage <Button leadingIcon={<Home className="h-4 w-4" />}>Button</Button>
   */
  leadingIcon?: React.ReactNode;

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

  // ? How do I breakdown variants, e.g: primary with state (hover, disabled, focus) with themes? e.g: Primary Light, Error Light
  variant: {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 disabled:bg-primary-200 disabled:border-primary-200 focus-visible:ring-primary-100 border-primary-600 hover:border-primary-700',
    white:
      'bg-white text-gray-700 border-gray-300 hover:text-gray-800 hover:bg-gray-50 focus-visible:ring-gray-100 disabled:text-gray-300 disabled:border-gray-200 disabled:hover:bg-white',
    secondary:
      'bg-primary-50 border-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 hover:border-primary-100 focus-visible:ring-primary-100 disabled:bg-primary-25 disabled:border-primary-25 disabled:text-primary-300 disabled:hover:bg-primary-25',
    error:
      'bg-error-600 border-error-600  text-white hover:bg-error-700 hover:border-error-700 focus-visible:ring-error-100 disabled:bg-error-200 disabled:text-white disabled:border-error-200',
    warning:
      'bg-warning-600 border-warning-600 text-white hover:bg-warning-700 hover:border-warning-700 focus-visible:ring-warning-100 disabled:bg-warning-200 disabled:text-white disabled:border-warning-200',
    success:
      'bg-success-600 border-success-600 text-white hover:bg-success-700 hover:border-success-700 focus-visible:ring-success-100 disabled:bg-success-200 disabled:text-white disabled:border-success-200',
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
        'border',
        'focus-visible:outline-none focus-visible:ring-4',
        'font-medium transition-colors'
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
