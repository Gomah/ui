import { ArrowLeftIcon } from '@heroicons/react/20/solid';
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

export const CheckYourEmail: Story = (props) => {
  return (
    <div className="pt-24">
      <div className="mx-auto w-full max-w-sm space-y-10">
        <header className="space-y-3 text-center">
          <Heading size="sm" weight="semibold">
            Check your email
          </Heading>
          <Text>
            We sent a password reset link to <strong>thomas@distributed.sh</strong>
          </Text>
        </header>

        <Button size="lg" fullWidth>
          Open email app
        </Button>

        <Text size="sm" className="text-center">
          Didn&apos;t receive the email? <Link weight="medium">Click to resend</Link>
        </Text>

        <Link
          size="sm"
          href="/?story=templates--auth--login--simple"
          className="flex items-center justify-center space-x-1 text-gray-600"
          weight="medium"
        >
          <ArrowLeftIcon className="h-5 w-5" /> <span>Back to log in</span>
        </Link>
      </div>
    </div>
  );
};

export const SetNewPassword: Story = (props) => {
  return (
    <div className="pt-24">
      <div className="mx-auto w-full max-w-sm space-y-10">
        <header className="space-y-3 text-center">
          <Heading size="sm" weight="semibold">
            Set new password
          </Heading>
          <Text>Your new password must be different to previously used passwords.</Text>
        </header>

        <form className="space-y-6">
          <Field
            size="sm"
            label="Password"
            htmlFor="password"
            message="Must be at least 8 characters."
          >
            <Input required placeholder="••••••••" id="password" type="password" />
          </Field>

          <Field size="sm" label="Confirm your password" htmlFor="confirm">
            <Input required placeholder="••••••••" id="confirm" type="password" />
          </Field>

          <Button size="lg" fullWidth>
            Reset password
          </Button>
        </form>

        <Link
          size="sm"
          href="/?story=templates--auth--login--simple"
          className="flex items-center justify-center space-x-1 text-gray-600"
          weight="medium"
        >
          <ArrowLeftIcon className="h-5 w-5" /> <span>Back to log in</span>
        </Link>
      </div>
    </div>
  );
};

export const PasswordReset: Story = (props) => {
  return (
    <div className="pt-24">
      <div className="mx-auto w-full max-w-sm space-y-8">
        <header className="space-y-3 text-center">
          <Heading size="sm" weight="semibold">
            Password reset
          </Heading>
          <Text>Your password has been successfully reset. Click below to log in magically.</Text>
        </header>

        <Button size="lg" fullWidth>
          Continue
        </Button>

        <Link
          size="sm"
          href="/?story=templates--auth--login--simple"
          className="flex items-center justify-center space-x-1 text-gray-600"
          weight="medium"
        >
          <ArrowLeftIcon className="h-5 w-5" /> <span>Back to log in</span>
        </Link>
      </div>
    </div>
  );
};
