import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import * as React from 'react';

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
  variant?: 'primary' | 'error';

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
      variant = 'primary',
      className = '',
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
    const fieldClass = clsx(styles.size[size]);
    const labelClass = clsx(['block  font-medium text-gray-700']);
    const inputWrapperClass = clsx('relative mt-1.5');

    const messageClass = clsx(['mt-2 text-sm text-gray-500']);

    return (
      <div>
        <div {...props} className={fieldClass} ref={ref}>
          <label htmlFor={htmlFor} className={labelClass}>
            {label}
          </label>
          <div className={inputWrapperClass}>{children}</div>
          {!!trailingIcon ||
            (variant === 'error' && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {trailingIcon || (
                  <ExclamationCircleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
                )}
              </div>
            ))}
        </div>
        {message ? <p className={messageClass}>{message}</p> : ''}
      </div>
    );
  }
);

Field.displayName = 'Field';

export { Field };
