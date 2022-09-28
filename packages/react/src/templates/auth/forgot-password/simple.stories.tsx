import type { Story } from '@ladle/react';
import { Button, Checkbox, Field, Heading, Input, Link, Text } from '../../../components';

export default {
  title: 'Templates / Auth / Forgot password',
};

export const Simple: Story = (props) => {
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

          <Link
            href="/?story=templates--auth--login--simple"
            className="block text-center"
            weight="medium"
          >
            Back to log in
          </Link>
        </form>
      </div>
    </div>
  );
};
