import { Button, Switch, Select } from '@acme/react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Docs() {
  const [enabled, setEnabled] = useState(false);
  const [favouriteNumber, setFavouriteNumber] = useState('');

  type Option = { id: string; value: string; description: string };

  const options = [
    { id: '1', value: 'One', description: 'This is number one' },
    { id: '2', value: 'Two', description: 'This is number two' },
  ];

  return (
    <div className="container mx-auto my-20 max-w-lg space-y-10">
      <div>
        <Button trailingIcon={<BeakerIcon className="h-5 w-5" />}>Submit</Button>
      </div>

      <Switch checked={enabled} onChange={(value) => setEnabled(value)} />

      <Select
        options={options}
        by="id"
        displayKey="value"
        selected={favouriteNumber}
        placeholder="Please select"
        onChange={(option) => {
          setFavouriteNumber(option.id);
        }}
      />
    </div>
  );
}
