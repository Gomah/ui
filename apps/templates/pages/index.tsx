import { Heading, Link } from '@acme/react';
import NextLink from 'next/link';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Docs() {
  const [enabled, setEnabled] = useState(false);
  const [favouriteNumber, setFavouriteNumber] = useState('');

  type Option = { id: string; value: string; description: string };

  // const options = [
  //   { id: '1', value: 'One', description: 'This is number one' },
  //   { id: '2', value: 'Two', description: 'This is number two' },
  // ];

  const options = ['One', 'Two', 'Three'];

  return (
    <div className="container mx-auto my-20 max-w-lg space-y-10">
      <Heading>Auth</Heading>

      <NextLink href="/auth/login/simple" passHref>
        <Link>Login – Simple</Link>
      </NextLink>
    </div>
  );
}
