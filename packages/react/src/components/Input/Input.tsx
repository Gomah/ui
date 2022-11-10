import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { input, InputVariants } from './Input.css';

export type InputProps = {}  & Omit<React.ComponentPropsWithRef<'input'>, 'size'> & InputVariants

export const Input = React.forwardRef<HTMLInputElement, React.PropsWithRef<InputProps>>(
  ({ children, className, intent = 'gray', type = 'text', size = 'md', ...props }, ref) => {
    const inputClasses = twMerge(
      input({
        intent,
        size,
      }),
      className
    );

    return <input ref={ref} type={type} {...props} className={inputClasses} />;
  }
);

Input.displayName = 'Input';
