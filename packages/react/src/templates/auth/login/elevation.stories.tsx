import type { Story } from '@ladle/react';
import { Button, Checkbox, Field, Heading, Input, Link, Text } from '../../../components';

export default {
  title: 'Templates / Auth / Login',
};

export const Elevation: Story = () => {
  return (
    <div className="flex h-full items-center justify-center bg-gray-50">
      <div className="mx-auto w-full max-w-md space-y-10">
        <header className="space-y-3 text-center">
          <Heading size="sm" weight="semibold">
            Log in to your account
          </Heading>
          <Text>Welcome back! Please enter your details.</Text>
        </header>

        <form className="space-y-6 rounded-xl bg-white p-6 px-10 pt-8 shadow-md">
          <Field size="sm" label="Email" htmlFor="email">
            <Input required placeholder="Enter your email" id="email" type="email" />
          </Field>

          <Field size="sm" label="Password" htmlFor="password">
            <Input required placeholder="••••••••" id="password" type="password" />
          </Field>

          <div className="flex items-center justify-between">
            <Checkbox required size="sm" id="get-notified" label="Remember me" />

            <Link href="/?story=templates--auth--forgot-password--simple" size="sm" weight="medium">
              Forgot password
            </Link>
          </div>

          <Button size="lg" fullWidth>
            Sign in
          </Button>
        </form>

        <Text size="sm" className="text-center">
          Don&apos;t have an account?{' '}
          <Link href="/?story=templates--auth--login--simple" weight="medium">
            Sign up
          </Link>
        </Text>
      </div>
    </div>
  );
};
