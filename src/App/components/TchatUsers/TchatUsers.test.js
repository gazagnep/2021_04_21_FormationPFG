import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatUsers from './TchatUsers';

describe('<TchatUsers />', () => {
  test('it should mount', () => {
    render(<TchatUsers />);
    
    const tchatUsers = screen.getByTestId('TchatUsers');

    expect(tchatUsers).toBeInTheDocument();
  });
});