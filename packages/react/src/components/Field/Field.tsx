import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const styles = /*tw*/ {
  size: {
    sm: 'text-sm',
    md: 'text-base',
  },
};

export interface FieldProps extends React.ComponentPropsWithRef<'div'> {
  label: string;
  htmlFor: string;
  message?: string;
  colour?: 'primary' | 'error';

  size?: 'sm' | 'md';

  /**
   * Trailing icon
   * @usage <Field trailingIcon={<HomeIcon />}>Button</Field>
   */
  trailingIcon?: React.ReactNode;
}

const Field = React.forwardRef<HTMLDivElement, React.PropsWithRef<FieldProps>>(
  (
    {
      colour = 'primary',
      className,
      label,
      htmlFor,
      children,
      message,
      size = 'md',
      trailingIcon,
      ...props
    },
    ref
  ) => {
    const fieldClass = twMerge(clsx(styles.size[size]), className);
    const labelClass = clsx(['block  font-medium text-gray-700']);
    const inputWrapperClass = clsx('relative mt-1.5');

    const childrenWithProps = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          // @ts-ignore
          colour,
        });
      }
      return child;
    });

    const messageClass = clsx(
      'mt-2 text-sm',
      colour === 'error' ? 'text-error-500' : 'text-gray-500'
    );

    return (
      <div>
        <div {...props} className={fieldClass} ref={ref}>
          <label htmlFor={htmlFor} className={labelClass}>
            {label}
          </label>
          <div className={inputWrapperClass}>
            {childrenWithProps}
            {colour === 'error' && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {trailingIcon || (
                  <ExclamationCircleIcon className="h-5 w-5 text-error-600" aria-hidden="true" />
                )}
              </div>
            )}
          </div>
        </div>
        {message ? <p className={messageClass}>{message}</p> : ''}
      </div>
    );
  }
);

Field.displayName = 'Field';

export { Field };
