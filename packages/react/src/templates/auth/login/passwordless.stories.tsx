import type { Story } from '@ladle/react';
import { Button, Checkbox, Field, Heading, Input, Link, Text } from '../../../components';

export default {
  title: 'Templates / Auth / Login',
};

export const Passwordless: Story = () => {
  return (
    <div className="pt-24">
      <div className="mx-auto w-full max-w-sm space-y-10">
        <header className="space-y-3 text-center">
          <Heading size="sm" weight="semibold">
            Log in to your account
          </Heading>
          <Text>Welcome back! Please enter your details.</Text>
        </header>

        <form className="space-y-4">
          <Input required placeholder="Enter your email" id="email" type="email" />

          <Button size="lg" fullWidth>
            Continue with email
          </Button>

          <Text size="sm" className="text-center">
            Don&apos;t have an account?{' '}
            <Link href="/?story=templates--auth--login--simple" weight="medium">
              Sign up
            </Link>
          </Text>
        </form>
      </div>
    </div>
  );
};
