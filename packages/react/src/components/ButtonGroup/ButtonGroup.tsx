import clsx from 'clsx';
import * as React from 'react';

export interface ButtonGroupProps extends React.ComponentPropsWithRef<'div'> {}

export const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ButtonGroupProps>
>(({ children, className, ...props }, ref) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore
        className: clsx('rounded-none', {
          'rounded-l-lg': index === 0,
          'rounded-r-lg': index === React.Children.count(children) - 1,
        }),
      });
    }
    return child;
  });

  return (
    <div ref={ref} {...props}>
      {childrenWithProps}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';
