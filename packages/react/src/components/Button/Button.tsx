import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonVariants, button, loader } from './Button.css';

export type ButtonProps = {
  /**
   * Leading icon
   * @usage `<Button leadingIcon={<Home className="h-4 w-4" />}>Button</Button>`
   */
  leadingIcon?: React.ReactNode;

  /**
   * Trailing icon
   * @usage <Button trailingIcon={<Home className="h-4 w-4" />}>Button</Button>
   */
  trailingIcon?: React.ReactNode;

  /**
   * Loading state
   */
  loading?: boolean;

  loadingSpinner?: React.ReactNode;
} & React.ComponentPropsWithRef<'button'> &
  ButtonVariants;

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
      loadingSpinner,
      intent,
      rounded,
      ...props
    },
    ref
  ) => {
    const buttonClasses = twMerge(
      button({
        intent,
        size,
        rounded,
        fullWidth,
      }),
      clsx(
        (!!leadingIcon || !!trailingIcon || loading) &&
          'inline-flex items-center justify-center space-x-2'
      ),
      className
    );

    const loaderClasses = loader({
      size,
    });

    return (
      <button ref={ref} {...props} className={buttonClasses}>
        {loading ? (
          loadingSpinner || (
            <svg className={loaderClasses} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )
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
