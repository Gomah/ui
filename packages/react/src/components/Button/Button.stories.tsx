import { action } from '@ladle/react';
import { Button, ButtonProps, ButtonSize, ButtonVariant } from './Button';
import type { Story } from '@ladle/react';

export const Examples: Story<ButtonProps> = (props) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Button {...props} onClick={action('onClick')}>
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

Examples.args = {
  rounded: false,
  loading: false,
  fullWidth: false,
  size: 'md',
  variant: 'primary',
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm', 'lg', 'xl', '2xl'] as ButtonSize[],
    control: { type: 'select' },
  },
  variant: {
    options: ['primary', 'secondary', 'error', 'warning'] as ButtonVariant[],
    control: { type: 'select' },
  },
};
