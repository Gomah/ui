import { Tag, TagProps, TagSize } from './Tag';
import type { Story } from '@ladle/react';

export const Examples: Story<TagProps> = (props) => {
  return (
    <div className="max-w-fit space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Tag {...props}>Label</Tag>
        </div>
      </div>
    </div>
  );
};

Examples.args = {
  size: 'md',
};

Examples.argTypes = {
  size: {
    options: ['md', 'sm', 'lg'] as TagSize[],
    control: { type: 'select' },
  },
};
