import { Badge, BadgeProps, BadgeSize, BadgeVariant } from './Badge';
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
  variant: 'gray',
  outlined: false,
  closable: false,
  withDot: false,
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm', 'lg'] as BadgeSize[],
    control: { type: 'select' },
  },
  variant: {
    options: ['gray', 'primary', 'error', 'success', 'warning'] as BadgeVariant[],
    control: { type: 'select' },
  },
};
