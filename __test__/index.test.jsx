import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/index';

describe('Home', () => {
  it('render a landing page', () => {
    render(<Home />);

    const helloText = screen.getByText(/hello/i);

    expect(helloText).toBeInTheDocument();
  });
});
