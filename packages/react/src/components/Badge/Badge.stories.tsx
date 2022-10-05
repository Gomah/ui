import { Badge, BadgeColour, BadgeProps, BadgeSize } from './Badge';
import type { Story } from '@ladle/react';

export const Examples: Story<BadgeProps> = (props) => {
  return (
    <div className="max-w-fit space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Badge {...props}>Label</Badge>
        </div>
      </div>
    </div>
  );
};

Examples.args = {
  size: 'md',
  colour: 'gray',
  outlined: false,
  closable: false,
  withDot: false,
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm', 'lg'] as BadgeSize[],
    control: { type: 'select' },
  },
  colour: {
    options: ['gray', 'primary', 'error', 'success', 'warning'] as BadgeColour[],
    control: { type: 'select' },
  },
};
