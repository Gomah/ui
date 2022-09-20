import { action } from '@ladle/react';
import { Select, SelectProps } from './Select';
import type { Story } from '@ladle/react';
import { useState } from 'react';

export const Examples: Story<SelectProps<Record<string, string>>> = (props) => {
  const options = [
    { id: '1', value: 'One', description: 'This is number one' },
    { id: '2', value: 'Two', description: 'This is number two' },
  ];

  const [favouriteNumber, setFavouriteNumber] = useState('');

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Select
            options={options}
            selected={favouriteNumber}
            placeholder="Please select"
            onChange={(option) => {
              action('onChange');
              setFavouriteNumber(option.id);
            }}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

Examples.args = {
  multiple: false,
  disabled: false,
  selected: '1',
  by: 'id',
  displayKey: 'value',
  variant: 'primary',
  // options: [
  //   { id: '1', value: 'One', description: 'This is number one' },
  //   { id: '2', value: 'Two', description: 'This is number two' },
  // ],
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm', 'lg', 'xl', '2xl'],
    control: { type: 'select' },
  },
};
