import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('muestra el título principal del portafolio', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /alexis/i })).toBeInTheDocument();
  });
});