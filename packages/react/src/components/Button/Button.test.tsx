import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', async () => {
  it('should render the button', async () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
