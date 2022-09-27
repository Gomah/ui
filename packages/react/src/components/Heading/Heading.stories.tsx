import { Heading, HeadingProps } from './Heading';
import type { Story } from '@ladle/react';

const HeadingStory: Story<HeadingProps> = (props) => <Heading {...props}>{props.children}</Heading>;

export default {
  title: 'Typography / Headings',
};

export const Playground = HeadingStory.bind({});

export const Examples = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Heading size="2xl">Heading 2xl</Heading>
        <Heading size="xl">Heading xl</Heading>
        <Heading size="lg">Heading lg</Heading>
        <Heading size="md">Heading md</Heading>
        <Heading size="sm">Heading sm</Heading>
        <Heading size="xs">Heading xs</Heading>
      </div>
    </div>
  );
};

Playground.args = {
  size: 'xs',
  children: 'Heading 😙',
} as Partial<HeadingProps>;

Playground.argTypes = {
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    control: { type: 'radio' },
    defaultValue: 'xs',
  },
};
