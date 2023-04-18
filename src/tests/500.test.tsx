import { render } from '@testing-library/react';
import React from 'react';
import InternalServerErrorPage from '../pages/500';

describe('InternalServerErrorPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<InternalServerErrorPage />);
    expect(container).toMatchSnapshot();
  });
});
