import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages';

describe('HomePage', () => {
  it('to match snapshot', () => {
    const { container } = render(<HomePage />, { wrapper: BrowserRouter });
    expect(container).toMatchSnapshot();
  });
});
