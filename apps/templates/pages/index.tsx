import { Heading, Link } from '@acme/react';
import NextLink from 'next/link';

export default function Templates() {
  return (
    <div className="container mx-auto my-20 max-w-lg space-y-10">
      <Heading>Auth</Heading>

      <NextLink href="/auth/login/simple" passHref>
        <Link>Login – Simple</Link>
      </NextLink>
    </div>
  );
}
