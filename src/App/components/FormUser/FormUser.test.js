import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormUser from './FormUser';

describe('<FormUser />', () => {
  test('it should mount', () => {
    render(<FormUser />);
    
    const formUser = screen.getByTestId('FormUser');

    expect(formUser).toBeInTheDocument();
  });
});