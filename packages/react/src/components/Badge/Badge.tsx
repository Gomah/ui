import { XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Defines size of the badge
   */
  size?: BadgeSize;

  /**
   * Defines colour of the badge
   */
  colour?: BadgeColour;

  /**
   * Outlined
   */
  outlined?: boolean;

  /**
   * Closable
   */
  closable?: boolean;

  /**
   * With leading dot
   */
  withDot?: boolean;

  /**
   * Leading Icon
   */
  leadingIcon?: React.ReactNode;

  /**
   * Trailing Icon
   */
  trailingIcon?: React.ReactNode;
}

const styles = /*tw*/ {
  size: {
    sm: 'py-0.5 px-2 text-xs',
    md: 'py-0.5 px-2.5 text-sm',
    lg: 'py-1 px-3 text-base',
  },

  colour: {
    gray: {
      default: 'bg-gray-100 text-gray-700',
      outlined: 'ring-gray-600 text-gray-700',
      closable: 'hover:bg-gray-200',
      dot: 'text-gray-500',
    },
    primary: {
      default: 'bg-primary-50 text-primary-700',
      outlined: 'ring-primary-600 text-primary-700',
      closable: 'hover:bg-primary-200',
      dot: 'text-primary-500',
    },
    error: {
      default: 'bg-error-50 text-error-700',
      outlined: 'ring-error-600 text-error-700',
      closable: 'hover:bg-error-200',
      dot: 'text-error-500',
    },
    warning: {
      default: 'bg-warning-50 text-warning-700',
      outlined: 'ring-warning-600 text-warning-700',
      closable: 'hover:bg-warning-200',
      dot: 'text-warning-500',
    },
    success: {
      default: 'bg-success-50 text-success-700',
      outlined: 'ring-success-600 text-success-700',
      closable: 'hover:bg-success-200',
      dot: 'text-success-500',
    },
  },
};

export type BadgeSize = keyof typeof styles.size;
export type BadgeColour = keyof typeof styles.colour;

export const Badge = React.forwardRef<HTMLDivElement, React.PropsWithChildren<BadgeProps>>(
  (
    {
      children,
      className,
      size = 'md',
      outlined,
      closable,
      leadingIcon,
      trailingIcon,
      withDot,
      colour = 'gray',
      ...props
    },
    ref
  ) => {
    const variant = outlined ? 'outlined' : 'default';
    const badgeClasses = twMerge(
      clsx(
        'inline-flex rounded-2xl font-medium',
        outlined && 'ring-inset ring-1.5',
        (closable || withDot || trailingIcon || leadingIcon) && 'items-center',
        (trailingIcon || leadingIcon) && 'space-x-1',
        styles.colour[colour][variant],
        styles.size[size]
      ),
      className
    );

    return (
      <div ref={ref} {...props} className={badgeClasses}>
        {withDot && (
          <svg
            className={clsx('mr-1.5 h-2 w-2', styles.colour[colour].dot)}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3" fill="currentColor" />
          </svg>
        )}

        {leadingIcon}
        <span>{children}</span>
        {trailingIcon}
        {closable && (
          <button
            type="button"
            className={clsx('ml-1 rounded-full', styles.colour[colour].closable)}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
