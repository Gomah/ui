import * as React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SelectProps<T> extends Omit<React.ComponentPropsWithRef<'div'>, 'onChange'> {
  options: T[];
  by?: keyof T;
  displayKey?: keyof T;
  selected?: string | string[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  onChange?: (option: T) => void;

  size?: keyof typeof styles.size;
}

const styles = /*tw*/ {
  size: {
    sm: 'py-2 px-3 text-sm',
    md: 'py-2.5 px-3.5 ',
  },
};

function _select<T>(
  {
    by,
    onChange,
    options,
    displayKey,
    disabled,
    multiple,
    selected,
    placeholder = 'Select',
    className,
    size = 'md',
    ...props
  }: SelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const selectedOption = React.useMemo(() => {
    return Array.isArray(selected)
      ? // @ts-ignore
        options.filter((option) => selected?.includes(by ? option[by] : option))
      : options.find((option) => (by ? option[by] : option === selected));
  }, [by, selected, options]);

  const buttonClassNames = twMerge(
    clsx(
      styles.size[size],
      'relative w-full bg-white cursor-default rounded-lg shadow-xs border border-gray-300 transition',
      'text-left placeholder-gray-100',
      '',
      'focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-100'
    ),
    className
  );

  const optionsClassNames = clsx(
    'absolute mt-[5px] max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-200 focus:outline-none'
  );

  const optionContainerClassNames = (active: boolean) =>
    clsx(
      'relative cursor-default select-none py-0.5 px-1.5',
      // 'relative cursor-default select-none py-2 pl-10 pr-4',
      // active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
    );

  const optionClassNames = ({ selected, active, disabled}: Record<string, boolean>) =>
    clsx('pb-2.5 pl-2 pr-2.5 pt-2.5 space-x-2',
      (selected || active) && 'bg-gray-50 rounded-md'
    );

  return (
    <Listbox
      // @ts-ignore
      ref={ref}
      by={by as string}
      value={selectedOption}
      multiple={multiple}
      disabled={disabled}
      onChange={onChange}
    >
      {({ open }) => (
        <div className="relative mt-1">
          <Listbox.Button className={clsx(buttonClassNames, open && 'ring-4 ring-primary-100')}>
            <span className="block truncate">
              {!!displayKey
                ? // @ts-ignore
                  selectedOption?.[displayKey]
                : // @ts-ignore
                  selectedOption?.join(', ') || (
                    <span className="text-gray-500">{placeholder}</span>
                  )}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={optionsClassNames}>
              {options.map((option: T) => (
                <Listbox.Option
                  // @ts-ignore
                  key={by ? option[by] : option}
                  value={option}
                  className={({ active }) => optionContainerClassNames(active)}
                >
                  {({ selected, active, disabled }) => (
                    <div className={optionClassNames({ selected, active, disabled})}>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {/* @ts-ignore */}
                        {displayKey ? option[displayKey] : option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}

// Select.displayName = 'Select';
// @ts-ignore
export const Select = React.forwardRef(_select) as <T>(
  props: SelectProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof _select>;
