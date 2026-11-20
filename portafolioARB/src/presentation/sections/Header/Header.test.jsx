import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header.jsx';

describe('Header', () => {
  it('muestra el logo, los enlaces de navegación y el botón Hablemos', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Alexis, ir al inicio' })).toHaveAttribute(
      'href',
      '#inicio',
    );
    ['Sobre mí', '¿Por qué elegirme?', 'Trayectoria', 'Proyectos', 'Contacto', 'Hablemos'].forEach(
      (name) => {
        expect(screen.getByRole('link', { name })).toBeInTheDocument();
      },
    );
  });

  it('abre y cierra el menú móvil', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole('button', { name: 'Abrir menú' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });
});