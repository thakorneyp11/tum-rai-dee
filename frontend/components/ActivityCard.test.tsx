import React from 'react';
import { render, screen } from '@testing-library/react';
import ActivityCard from './ActivityCard';

const mockActivity = {
  id: 1,
  title: 'Test Activity',
  description: 'This is a test activity',
  images: ['[Activity Image 1]'],
};

describe('ActivityCard', () => {
  it('renders the activity title and description', () => {
    render(<ActivityCard activity={mockActivity} />);
    expect(screen.getByText('Test Activity')).toBeInTheDocument();
    expect(screen.getByText('This is a test activity')).toBeInTheDocument();
  });

  it('renders the activity image', () => {
    render(<ActivityCard activity={mockActivity} />);
    expect(screen.getByAltText('Activity image 1')).toBeInTheDocument();
  });

  it('renders the action buttons', () => {
    render(<ActivityCard activity={mockActivity} />);
    expect(screen.getByText('✗')).toBeInTheDocument();
    expect(screen.getByText('😐')).toBeInTheDocument();
    expect(screen.getByText('♥')).toBeInTheDocument();
    expect(screen.getByText('ℹ️')).toBeInTheDocument();
  });
});
