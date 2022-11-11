import { XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { badge, badgeCloseButton, badgeDot, BadgeVariants } from './Badge.css';

export type BadgeProps = React.ComponentPropsWithRef<'div'> & {
  /**
   * Leading Icon
   */
  leadingIcon?: React.ReactNode;

  /**
   * Trailing Icon
   */
  trailingIcon?: React.ReactNode;
} & BadgeVariants;

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
      intent = 'gray',
      ...props
    },
    ref
  ) => {
    const badgeClasses = twMerge(
      badge({
        closable,
        intent,
        outlined,
        size,
        withDot,
      }),
      clsx(
        (closable || withDot || trailingIcon || leadingIcon) && 'items-center',
        (trailingIcon || leadingIcon) && 'space-x-1'
      ),
      className
    );

    return (
      <div ref={ref} {...props} className={badgeClasses}>
        {withDot && (
          <svg
            className={badgeDot({ intent })}
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
          <button type="button" className={badgeCloseButton({ intent })}>
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
