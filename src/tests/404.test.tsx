import { render } from '@testing-library/react';
import NotFoundPage from '../pages/404';
import React from 'react';

describe('NotFoundPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});
