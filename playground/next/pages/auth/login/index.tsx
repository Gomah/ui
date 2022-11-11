import { Button, Link, Heading, Text, Field, Input, Checkbox } from '@acme/react';
import NextLink from 'next/link';

export default function Auth() {
  return (
    <div className="pt-24">
      <div className="mx-auto w-full max-w-sm space-y-10">
        <header className="space-y-3 text-center">
          <Heading size="sm" weight="semibold">
            Log in to your account
          </Heading>
          <Text>Welcome back! Please enter your details.</Text>
        </header>

        <form className="space-y-6">
          <Field size="sm" label="Email" htmlFor="email">
            <Input required placeholder="Enter your email" id="email" type="email" />
          </Field>

          <Field size="sm" label="Password" htmlFor="password">
            <Input required placeholder="••••••••" id="password" type="password" />
          </Field>

          <div className="flex items-center justify-between">
            <Checkbox required size="sm" id="get-notified" label="Remember me" />

            <NextLink href="/auth/forgot-password/simple" passHref legacyBehavior>
              <Link size="sm" weight="medium">
                Forgot password
              </Link>
            </NextLink>
          </div>

          <Button size="lg" fullWidth>
            Sign in
          </Button>

          <Text size="sm" className="text-center">
            Don&apos;t have an account?{' '}
            <NextLink href="/" passHref legacyBehavior>
              <Link weight="medium">Sign up</Link>
            </NextLink>
          </Text>
        </form>
      </div>
    </div>
  );
}
