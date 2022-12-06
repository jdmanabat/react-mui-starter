import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Test from './Test';

describe('App', () => {
  test('Renders Hello world', () => {
    render(<Test />);

    expect(screen.getByText(/Hello world/i)).toBeDefined();
  });
});
