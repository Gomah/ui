import { XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Defines size of the badge
   * @usage <Badge size="sm">Label</Badge>
   */
  size?: BadgeSize;

  /**
   * Defines variant of the badge
   * @usage <Badge variant="primary">Label</Badge>
   */
  variant?: BadgeVariant;

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
}

const styles = /*tw*/ {
  size: {
    sm: 'py-0.5 px-2 text-xs',
    md: 'py-0.5 px-2.5 text-sm',
    lg: 'py-1 px-3 text-base',
  },

  variant: {
    gray: {
      default: 'bg-gray-100 text-gray-700',
      outlined: 'ring-gray-600 text-gray-700',
      closable: 'hover:bg-gray-200',
    },
    primary: {
      default: 'bg-primary-50 text-primary-700',
      outlined: 'ring-primary-600 text-primary-700',
      closable: 'hover:bg-primary-200',
    },
    error: {
      default: 'bg-error-50 text-error-700',
      outlined: 'ring-error-600 text-error-700',
      closable: 'hover:bg-error-200',
    },
    warning: {
      default: 'bg-warning-50 text-warning-700',
      outlined: 'ring-warning-600 text-warning-700',
      closable: 'hover:bg-warning-200',
    },
    success: {
      default: 'bg-success-50 text-success-700',
      outlined: 'ring-success-600 text-success-700',
      closable: 'hover:bg-success-200',
    },
  },
};

export type BadgeSize = keyof typeof styles.size;
export type BadgeVariant = keyof typeof styles.variant;

export const Badge = React.forwardRef<HTMLDivElement, React.PropsWithChildren<BadgeProps>>(
  (
    {
      children,
      className = '',
      size = 'md',
      outlined,
      closable,
      withDot,
      variant = 'gray',
      ...props
    },
    ref
  ) => {
    const variantTheme = outlined ? 'outlined' : 'default';
    const badgeClasses = twMerge(
      clsx(
        'inline-flex rounded-2xl font-medium',
        outlined && 'ring-inset ring-1.5',
        (closable || withDot) && 'items-center',
        styles.variant[variant][variantTheme], // Apply variant style & theme
        styles.size[size] // Apply size style
      ),
      className
    );

    return (
      <div ref={ref} {...props} className={badgeClasses}>
        {withDot && (
          <svg
            className="mr-1 h-2 w-2"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3" fill="currentColor" />
          </svg>
        )}
        {children}
        {closable && (
          <button
            type="button"
            className={clsx('ml-1 rounded-full', styles.variant[variant].closable)}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
