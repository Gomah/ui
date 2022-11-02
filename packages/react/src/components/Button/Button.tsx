import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonVariants, button } from './Button.css';

export type ButtonProps = {
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
   * Rounded button
   */
  rounded?: boolean;

  /**
   * Loading state
   */
  loading?: boolean;

  /** Full width */
  fullWidth?: boolean;

  loadingSpinner?: React.ReactNode;
} & React.ComponentPropsWithRef<'button'> &
  ButtonVariants;

// const styles = /*tw*/ {
//   size: {
//     sm: 'py-2 px-3.5 text-sm',
//     md: 'py-2.5 px-4 text-sm',
//     lg: 'py-2.5 px-[18px] text-base',
//     xl: 'py-3 px-5 text-base',
//     '2xl': 'py-4 px-7 text-lg',
//   },

//   // ? How do I breakdown variants, e.g: primary with state (hover, disabled, focus) with themes? e.g: Primary Light, Error Light
//   colour: {
//     primary:
//       'bg-primary-600 text-white hover:bg-primary-700 disabled:bg-primary-200 disabled:border-primary-200 focus-visible:ring-primary-100 border-primary-600 hover:border-primary-700',
//     white:
//       'bg-white text-gray-700 border-gray-300 hover:text-gray-800 hover:bg-gray-50 focus-visible:ring-gray-100 disabled:text-gray-300 disabled:border-gray-200 disabled:hover:bg-white',
//     secondary:
//       'bg-primary-50 border-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 hover:border-primary-100 focus-visible:ring-primary-100 disabled:bg-primary-25 disabled:border-primary-25 disabled:text-primary-300 disabled:hover:bg-primary-25',
//     error:
//       'bg-error-600 border-error-600  text-white hover:bg-error-700 hover:border-error-700 focus-visible:ring-error-100 disabled:bg-error-200 disabled:text-white disabled:border-error-200',
//     warning:
//       'bg-warning-600 border-warning-600 text-white hover:bg-warning-700 hover:border-warning-700 focus-visible:ring-warning-100 disabled:bg-warning-200 disabled:text-white disabled:border-warning-200',
//     success:
//       'bg-success-600 border-success-600 text-white hover:bg-success-700 hover:border-success-700 focus-visible:ring-success-100 disabled:bg-success-200 disabled:text-white disabled:border-success-200',
//   },

//   shadow: 'shadow-xs',

//   rounded: {
//     full: 'rounded-full',
//     default: 'rounded-lg',
//   },

//   focus: 'focus-visible:outline-none focus-visible:ring-4',
//   border: 'border',
//   fontWeight: 'font-medium',
//   transition: 'transition',
// };

const loaderStyle = /*tw*/ {
  size: {
    sm: 'h-5 w-5',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-6 w-6',
    '2xl': 'h-7 w-7',
  },
};

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
    // const buttonClasses = twMerge(
    //   clsx(
    //     styles.colour[colour],
    //     styles.size[size],
    //     rounded ? styles.rounded.full : styles.rounded.default,
    //     (!!leadingIcon || !!trailingIcon || loading) &&
    //       'inline-flex items-center justify-center space-x-2',
    //     styles.shadow,
    //     styles.focus,
    //     styles.border,
    //     styles.fontWeight,
    //     styles.transition,
    //     fullWidth && 'w-full'
    //   ),
    //   className
    // );

    const buttonClasses = twMerge(
      button({
        intent,
        size,
        rounded,
      }),
      clsx(
        (!!leadingIcon || !!trailingIcon || loading) &&
          'inline-flex items-center justify-center space-x-2',
        fullWidth && 'w-full'
      ),
      className
    );

    return (
      <button ref={ref} {...props} className={buttonClasses}>
        {loading ? (
          loadingSpinner || (
            <svg
              className={clsx(loaderStyle.size[size], 'animate-spin')}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
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
