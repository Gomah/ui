import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const styles = /*tw*/ {
  size: {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  },

  colour: {
    primary:
      'border-gray-300 hover:bg-primary-100 hover:border-primary-600 text-primary-600 focus:ring-primary-100 focus:border-primary-300',
  },
};

type CheckboxSize = keyof typeof styles.size;
type CheckboxColour = keyof typeof styles.colour;

export interface CheckboxProps extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: CheckboxSize;

  colour?: CheckboxColour;

  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, React.PropsWithRef<CheckboxProps>>(
  ({ className, size = 'md', label, colour = 'primary', ...props }, ref) => {
    const checkboxClasses = twMerge(
      clsx(
        // Note, @tailwindcss/forms adds a focus:ring-offset-2, we want 0
        'rounded focus:ring-offset-0 transition',
        'focus-visible:ring-4 focus:ring-0',
        styles.size[size],
        styles.colour[colour]
      ),
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
