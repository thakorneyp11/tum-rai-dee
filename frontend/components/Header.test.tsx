import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the logo text', () => {
    render(<Header />);
    const logoElement = screen.getByText('TumRaiDee');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the menu icon', () => {
    render(<Header />);
    const menuIcon = screen.getByText('☰');
    expect(menuIcon).toBeInTheDocument();
  });
});
