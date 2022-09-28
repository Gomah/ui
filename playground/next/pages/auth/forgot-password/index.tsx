import { Button, Link, Heading, Text, Field, Input, Checkbox } from '@acme/react';
import NextLink from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="pt-24">
      <div className="mx-auto w-full max-w-sm space-y-10">
        <header className="space-y-3 text-center">
          <Heading size="sm" weight="semibold">
            Forgot password?
          </Heading>
          <Text>No worries, we’ll send you reset instructions.</Text>
        </header>

        <form className="space-y-6">
          <Field size="sm" label="Email" htmlFor="email">
            <Input required placeholder="Enter your email" id="email" type="email" />
          </Field>

          <Button size="lg" fullWidth>
            Reset password
          </Button>

          <NextLink href="/auth/login/simple" passHref>
            <Link className="block text-center" weight="medium">
              Back to log in
            </Link>
          </NextLink>
        </form>
      </div>
    </div>
  );
}
