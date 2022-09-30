import * as React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const styles = /*tw*/ {
  size: {
    sm: 'text-sm py-[3px] px-2',
    md: 'text-base py-0.5 px-[9px]',
    lg: 'text-base py-1 px-2.5',
  },
};

export type TagSize = keyof typeof styles.size;

export interface TagProps extends React.ComponentPropsWithRef<'div'> {
  size?: TagSize;
}

export const Tag = React.forwardRef<HTMLParagraphElement, TagProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    const textClass = twMerge(
      clsx('text-gray-700', 'rounded-md font-medium border border-gray-300', styles.size[size]),
      className
    );

    return (
      <div ref={ref} {...props} className={textClass}>
        {children}
      </div>
    );
  }
);

Tag.displayName = 'Tag';
