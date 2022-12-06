import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Renders Hello world', () => {
    render(<App />);

    expect(screen.getByText(/Hello world/i)).toBeDefined();
  });
});
