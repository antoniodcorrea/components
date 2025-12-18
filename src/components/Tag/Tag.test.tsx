import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tag } from '.';

const defaultProps = {};

describe('Tag (Snapshot)', () => {
  it('renders properly', () => {
    const { container } = render(
      <Tag {...defaultProps}>Test</Tag>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Tag', () => {
  it('renders as a div', () => {
    const { container } = render(
      <Tag {...defaultProps}>Test</Tag>
    );

    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders children content', () => {
    render(<Tag {...defaultProps}>Test</Tag>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
