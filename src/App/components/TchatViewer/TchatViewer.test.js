import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatViewer from './TchatViewer';

describe('<TchatViewer />', () => {
  test('it should mount', () => {
    render(<TchatViewer />);
    
    const tchatViewer = screen.getByTestId('TchatViewer');

    expect(tchatViewer).toBeInTheDocument();
  });
});