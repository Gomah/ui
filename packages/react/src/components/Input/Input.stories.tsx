import { action } from '@ladle/react';
import { Input, InputProps, InputSize, InputColour } from './Input';
import type { Story } from '@ladle/react';
import { Field } from '../Field/Field';

export const Examples: Story<InputProps> = (props) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Field label="Email" htmlFor="email">
            <Input {...props} id="email" placeholder="hello@distributed.sh" />
          </Field>
        </div>
      </div>
    </div>
  );
};

Examples.args = {
  size: 'md',
  colour: 'primary',
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm'] as InputSize[],
    control: { type: 'select' },
  },
  colour: {
    options: ['primary', 'gray', 'error'] as InputColour[],
    control: { type: 'select' },
  },
};
