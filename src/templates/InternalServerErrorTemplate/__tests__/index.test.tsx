import { render } from '@testing-library/react';
import React from 'react';
import { InternalServerErrorTemplate } from '..';

describe('InternalServerErrorTemplate', () => {
  it('to match snapshot', () => {
    const { container } = render(<InternalServerErrorTemplate />);
    expect(container).toMatchSnapshot();
  });
});
