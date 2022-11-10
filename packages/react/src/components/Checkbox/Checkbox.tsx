import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { checkbox, CheckboxVariants } from './Checkbox.css';

export type CheckboxProps = { label?: string } & Omit<
  React.ComponentPropsWithRef<'input'>,
  'size'
> &
  CheckboxVariants;

const Checkbox = React.forwardRef<HTMLInputElement, React.PropsWithRef<CheckboxProps>>(
  ({ className, label, intent, size, ...props }, ref) => {
    const checkboxClasses = twMerge(
      checkbox({
        intent,
        size,
      }),
      className
    );

    const inputWrapperClasses = clsx('flex items-center h-5');

    return (
      <div className="relative flex">
        <div className={inputWrapperClasses}>
          <input ref={ref} {...props} type="checkbox" className={checkboxClasses} />
        </div>
        {label && (
          <div className="ml-3 text-sm">
            <label htmlFor={props.id} className="font-medium text-gray-700">
              {label}
            </label>
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
