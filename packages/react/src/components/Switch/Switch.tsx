import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Switch as HeadlessSwitch } from '@headlessui/react';

const styles = /*tw*/ {
  size: {
    sm: {
      container: 'h-5 w-10',
      dot: 'h-5 w-5',
      translate: {
        active: 'translate-x-5',
        default: 'translate-x-0',
      },
    },
    md: {
      container: 'h-6 w-11',
      dot: 'h-4 w-4',
      translate: {
        active: 'translate-x-6',
        default: 'translate-x-1',
      },
    },
  },
  colour: {
    primary: 'bg-primary-600',
    dark: 'bg-gray-900',
    warning: 'bg-warning-600',
    error: 'bg-error-600',
    success: 'bg-success-600',
  },
};

export type SwitchSize = keyof typeof styles.size;
export type SwitchColour = keyof typeof styles.colour;

export interface SwitchProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'onChange' | 'checked'> {
  checked: boolean;
  onChange(checked: boolean): void;
  screenReaderMessage?: string;

  /**
   * Defines the size of the switch
   */
  size?: SwitchSize;

  /**
   * Defines colour of the switch
   */
  colour?: SwitchColour;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      children,
      checked,
      colour = 'primary',
      size = 'md',
      onChange,
      className,
      screenReaderMessage,
      ...props
    },
    ref
  ) => {
    return (
      // @ts-ignore
      <HeadlessSwitch
        ref={ref}
        checked={checked}
        onChange={onChange}
        {...props}
        className={twMerge(
          clsx(
            checked ? styles.colour[colour] : 'bg-gray-200',
            styles.size[size].container,
            'relative inline-flex items-center rounded-full'
          ),
          className
        )}
      >
        {screenReaderMessage && <span className="sr-only">{screenReaderMessage}</span>}
        <span
          className={clsx(
            checked ? styles.size[size].translate.active : styles.size[size].translate.default,
            styles.size[size].dot,
            'inline-block transform rounded-full bg-white shadow transition '
          )}
        />
      </HeadlessSwitch>
    );
  }
);

Switch.displayName = 'Switch';
