import { action } from '@ladle/react';
import { Switch, SwitchProps, SwitchColour } from './Switch';
import type { Story } from '@ladle/react';
import { useState } from 'react';

export const Examples: Story<SwitchProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-x-4">
          <Switch {...props} checked={checked} onChange={() => setChecked(!checked)} />
        </div>
      </div>
    </div>
  );
};

Examples.args = {
  colour: 'primary',
  checked: false,
};

Examples.argTypes = {
  colour: {
    options: ['primary', 'dark', 'error', 'warning', 'success'] as SwitchColour[],
    control: { type: 'select' },
  },
};
