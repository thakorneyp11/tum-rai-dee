import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../pages/index';
import { ActivityContext } from '../../context/ActivityContext';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    };
  },
}));

const mockActivity = {
  id: 1,
  title: 'Test Activity',
  description: 'This is a test activity',
  images: ['[Activity Image 1]'],
};

const mockContextValue = {
  activities: [mockActivity],
  currentActivity: mockActivity,
  setCurrentActivity: jest.fn(),
};

describe('Home', () => {
  it('renders the activity card when there is a current activity', () => {
    render(
      <ActivityContext.Provider value={mockContextValue}>
        <Home />
      </ActivityContext.Provider>
    );
    expect(screen.getByText('Test Activity')).toBeInTheDocument();
    expect(screen.getByText('This is a test activity')).toBeInTheDocument();
  });

  it('does not render the activity card when there is no current activity', () => {
    const emptyContextValue = { ...mockContextValue, currentActivity: null };
    render(
      <ActivityContext.Provider value={emptyContextValue}>
        <Home />
      </ActivityContext.Provider>
    );
    expect(screen.queryByText('Test Activity')).not.toBeInTheDocument();
  });
});
