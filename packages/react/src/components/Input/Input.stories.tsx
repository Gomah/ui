import { action } from '@ladle/react';
import { Input, InputProps, InputSize, InputVariant } from './Input';
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
  variant: 'primary',
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm'] as InputSize[],
    control: { type: 'select' },
  },
  variant: {
    options: ['primary', 'gray', 'error'] as InputVariant[],
    control: { type: 'select' },
  },
};
