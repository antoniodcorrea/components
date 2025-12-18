import React from 'react';
import { render } from '@testing-library/react';

import { Palette } from '.';

const defaultProps = {};

describe('Palette (Snapshot)', () => {
  it('renders properly', () => {
    const { container } = render(<Palette {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Palette', () => {
  it('renders as a div', () => {
    const { container } = render(<Palette {...defaultProps} />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
