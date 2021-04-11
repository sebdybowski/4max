import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Field from './Field';

describe('<Field />', () => {
  test('it should mount', () => {
    render(<Field />);
    
    const field = screen.getByTestId('Field');

    expect(field).toBeInTheDocument();
  });
});