import { Button, ButtonProps } from './Button';
import type { Story } from '@ladle/react';

const ButtonStory: Story<ButtonProps> = (props) => <Button {...props}>{props.children}</Button>;

export const Examples = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Button>Button</Button>
        </div>
      </div>
    </div>
  );
};
