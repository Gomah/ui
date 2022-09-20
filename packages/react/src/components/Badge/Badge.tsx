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
    },
    primary: {
      default: 'bg-primary-50 text-primary-700',
      outlined: 'ring-primary-600 text-primary-700',
    },
    error: {
      default: 'bg-error-50 text-error-700',
      outlined: 'ring-error-600 text-error-700',
    },
    warning: {
      default: 'bg-warning-50 text-warning-700',
      outlined: 'ring-warning-600 text-warning-700',
    },
    success: {
      default: 'bg-success-50 text-success-700',
      outlined: 'ring-success-600 text-success-700',
    },
  },
};

export type BadgeSize = keyof typeof styles.size;
export type BadgeVariant = keyof typeof styles.variant;

export const Badge = React.forwardRef<HTMLDivElement, React.PropsWithChildren<BadgeProps>>(
  ({ children, className = '', size = 'md', outlined, variant = 'gray', ...props }, ref) => {
    const variantStyle = outlined ? 'outlined' : 'default';
    const badgeClasses = twMerge(
      clsx(
        'inline-flex rounded-2xl font-medium',
        outlined && 'ring-inset ring-1.5',
        styles.variant[variant][variantStyle], // Apply variant style
        styles.size[size] // Apply size style
      ),
      className
    );

    return (
      <div ref={ref} {...props} className={badgeClasses}>
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
