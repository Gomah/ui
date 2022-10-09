import { action } from '@ladle/react';
import { Button, ButtonProps, ButtonSize, ButtonColour } from './Button';
import type { Story } from '@ladle/react';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export const Examples: Story<ButtonProps> = (props) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Button {...props}>
            Button
          </Button>
        </div>
        <div className="space-x-4">
          <ButtonGroup {...props}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
            <Button>Five</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

Examples.args = {
  disabled: false,
  rounded: false,
  loading: false,
  fullWidth: false,
  size: 'md',
  colour: 'primary',
};

Examples.argTypes = {
  onClick: {
    action: "clicked",
  },
  size: {
    options: ['md', 'sm', 'lg', 'xl', '2xl'] as ButtonSize[],
    control: { type: 'select' },
  },
  colour: {
    options: ['primary', 'white', 'secondary', 'success', 'error', 'warning'] as ButtonColour[],
    control: { type: 'select' },
  },
};
