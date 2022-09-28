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
}

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
      'relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm'
    ),
    className
  );

  const optionsClassNames = clsx(
    'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
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
      <div className="relative mt-1">
        <Listbox.Button className={buttonClassNames}>
          {/* @ts-ignore */}
          <span className="block truncate">
            {!!displayKey
              ? // @ts-ignore
                selectedOption?.[displayKey]
              : // @ts-ignore
                selectedOption?.join(', ') || placeholder}
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
                className={({ active }) =>
                  clsx(
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                    active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {/* @ts-ignore */}
                      {displayKey ? option[displayKey] : option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

// Select.displayName = 'Select';
// @ts-ignore
export const Select = React.forwardRef(_select) as <T>(
  props: SelectProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof _select>;
