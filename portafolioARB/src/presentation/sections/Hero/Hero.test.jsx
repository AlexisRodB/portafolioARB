import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero.jsx';

describe('Hero', () => {
  it('muestra el nombre, el rol y la frase de presentación', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: /alexis/i })).toBeInTheDocument();
    expect(screen.getByText(/full stack/i)).toBeInTheDocument();
    expect(screen.getByText('código')).toBeInTheDocument();
  });

  it('muestra el año actual en la insignia', () => {
    render(<Hero />);
    expect(screen.getByText(String(new Date().getFullYear()))).toBeInTheDocument();
  });

  it('enlaza los botones a Proyectos y Sobre mí', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /explorar mi portafolio/i })).toHaveAttribute(
      'href',
      '#proyectos',
    );
    expect(screen.getByRole('link', { name: /conoce mi perfil/i })).toHaveAttribute(
      'href',
      '#sobre-mi',
    );
  });
});
