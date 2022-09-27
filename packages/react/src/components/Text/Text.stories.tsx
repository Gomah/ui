import { Text, TextProps } from './Text';
import type { Story } from '@ladle/react';

const TextStory: Story<TextProps> = (props) => <Text {...props}>{props.children}</Text>;

export default {
  title: 'Typography / Text',
};

export const Examples = () => {
  return (
    <div className="flex space-x-12">
      <div className="space-y-4">
        <Text size="xl">Text xl</Text>
        <Text size="lg">Text lg</Text>
        <Text size="md">Text md</Text>
        <Text size="sm">Text sm</Text>
        <Text size="xs">Text xs</Text>
      </div>

      <div className="space-y-4">
        <Text size="xl" weight="medium">
          Text xl
        </Text>
        <Text size="lg" weight="medium">
          Text lg
        </Text>
        <Text size="md" weight="medium">
          Text md
        </Text>
        <Text size="sm" weight="medium">
          Text sm
        </Text>
        <Text size="xs" weight="medium">
          Text xs
        </Text>
      </div>

      <div className="space-y-4">
        <Text size="xl" weight="semibold">
          Text xl
        </Text>
        <Text size="lg" weight="semibold">
          Text lg
        </Text>
        <Text size="md" weight="semibold">
          Text md
        </Text>
        <Text size="sm" weight="semibold">
          Text sm
        </Text>
        <Text size="xs" weight="semibold">
          Text xs
        </Text>
      </div>

      <div className="space-y-4">
        <Text size="xl" weight="bold">
          Text xl
        </Text>
        <Text size="lg" weight="bold">
          Text lg
        </Text>
        <Text size="md" weight="bold">
          Text md
        </Text>
        <Text size="sm" weight="bold">
          Text sm
        </Text>
        <Text size="xs" weight="bold">
          Text xs
        </Text>
      </div>
    </div>
  );
};

export const Playground = TextStory.bind({});

Playground.args = {
  size: 'md',
  children: 'test',
} as Partial<TextProps>;

Playground.argTypes = {
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    control: { type: 'radio' },
    defaultValue: 'md',
  },
};
