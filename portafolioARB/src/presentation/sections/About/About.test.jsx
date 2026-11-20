import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About.jsx';

describe('About', () => {
  it('muestra el título y la presentación', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { level: 2, name: /arquitectura limpia/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Alexis RB')).toBeInTheDocument();
  });

  it('ofrece la descarga del CV', () => {
    render(<About />);
    const cv = screen.getByRole('link', { name: /descargar cv/i });
    expect(cv).toHaveAttribute('href', '/assets/CV-ALEXISRODRIGUEZ_.PDF');
    expect(cv).toHaveAttribute('download');
  });

  it('muestra los botones de LinkedIn y GitHub', () => {
    render(<About />);
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
