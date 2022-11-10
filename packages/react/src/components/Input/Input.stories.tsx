import { Input, InputProps } from './Input';
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
  intent: 'primary',
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm'] as InputProps['size'][],
    control: { type: 'select' },
  },
  intent: {
    options: ['primary', 'gray', 'error'] as InputProps['intent'][],
    control: { type: 'select' },
  },
};
