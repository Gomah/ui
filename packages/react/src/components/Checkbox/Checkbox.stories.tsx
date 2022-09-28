import { Checkbox, CheckboxProps } from './Checkbox';
import type { Story } from '@ladle/react';
import { useState } from 'react';

const CheckboxStory: Story<CheckboxProps> = (props) => (
  <Checkbox {...props}>{props.children}</Checkbox>
);

export default {
  title: 'Checkbox',
};

export const Playground = CheckboxStory.bind({});

export const Examples = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Checkbox
          checked={isActive}
          onChange={(event) => {
            setActive(!isActive);
          }}
        />
      </div>
    </div>
  );
};

Playground.args = {
  size: 'md',
} as Partial<CheckboxProps>;

Playground.argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
    defaultValue: 'md',
  },
};
