import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  fieldClassNames,
  FieldVariants,
  inputWrapperClassNames,
  labelClassNames,
  messageClassNames,
} from './Field.css';

export type FieldProps = {
  label: string;
  htmlFor: string;
  message?: string;

  /**
   * Trailing icon
   * @usage <Field trailingIcon={<HomeIcon />}>Button</Field>
   */
  trailingIcon?: React.ReactNode;
} & React.ComponentPropsWithRef<'div'> &
  FieldVariants;

const Field = React.forwardRef<HTMLDivElement, React.PropsWithRef<FieldProps>>(
  (
    {
      intent = 'primary',
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
    const fieldClass = twMerge(fieldClassNames({ size }), className);
    const labelClass = labelClassNames();
    const inputWrapperClass = inputWrapperClassNames();
    const messageClass = messageClassNames({ intent });

    const childrenWithProps = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          // @ts-ignore
          size,
          intent,
        });
      }
      return child;
    });

    return (
      <div>
        <div {...props} className={fieldClass} ref={ref}>
          <label htmlFor={htmlFor} className={labelClass}>
            {label}
          </label>
          <div className={inputWrapperClass}>
            {childrenWithProps}
            {intent === 'error' && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {trailingIcon || (
                  <ExclamationCircleIcon className="h-5 w-5 text-error-600" aria-hidden="true" />
                )}
              </div>
            )}
          </div>
        </div>
        {message && <p className={messageClass}>{message}</p>}
      </div>
    );
  }
);

Field.displayName = 'Field';

export { Field };
