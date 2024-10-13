import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    };
  },
}));

describe('Footer', () => {
  it('renders all navigation items', () => {
    render(<Footer />);
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('History')).toBeInTheDocument();
    expect(screen.getByText('Friends')).toBeInTheDocument();
  });

  it('highlights the active navigation item', () => {
    render(<Footer />);
    const activeItem = screen.getByText('Main').closest('a');
    expect(activeItem).toHaveClass('text-primary');
  });
});
