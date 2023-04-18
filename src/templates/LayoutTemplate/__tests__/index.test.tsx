import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LayoutTemplate } from '..';
import React from 'react';

describe('LayoutTemplate', () => {
  it('to match snapshot without children', () => {
    const { container } = render(<LayoutTemplate />, {
      wrapper: BrowserRouter,
    });
    expect(container).toMatchSnapshot();
  });

  it('to match snapshot with children', () => {
    const { container } = render(
      <LayoutTemplate>
        <div>Layout</div>
      </LayoutTemplate>,
      { wrapper: BrowserRouter }
    );
    expect(container).toMatchSnapshot();
  });
});
