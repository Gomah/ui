import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Switch as HeadlessSwitch } from '@headlessui/react';

export interface SwitchProps extends Omit<React.ComponentPropsWithRef<'button'>, 'onChange'> {
  checked: boolean;
  onChange(checked: boolean): void;
}

// export type SwitchProps = {
//   checked: boolean;
//   onChange?(checked: boolean): void;
// } & Omit<React.ComponentPropsWithRef<'button'>, 'onChange'>;

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ children, checked, onChange, className = '', ...props }, ref) => {
    return (
      // @ts-ignore
      <HeadlessSwitch
        {...props}
        checked={checked}
        onChange={onChange}
        className={twMerge(
          clsx(
            checked ? 'bg-primary-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 items-center rounded-full'
          ),
          className
        )}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            checked ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </HeadlessSwitch>
    );
  }
);

Switch.displayName = 'Switch';
