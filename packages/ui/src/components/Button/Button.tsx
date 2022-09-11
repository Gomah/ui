import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      loading,
      ...props
    },
    ref
  ) => {

    return <button ref={ref as React.ForwardedRef<HTMLButtonElement>} {...props}>
       {children}
        </button>
  }
);

Button.displayName = 'Button';
