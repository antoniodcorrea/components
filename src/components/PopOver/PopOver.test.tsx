import React from 'react';
import { render, screen } from '@testing-library/react';

import { PopOver } from '.';

const props = {
  elementId: 'someId',
  content: 'Some content',
};

describe('PopOver', () => {
  test('component renders', () => {
    render(
      <PopOver {...props}>
        <span>trigger</span>
      </PopOver>
    );

    expect(screen.getByText('trigger')).toBeInTheDocument();
  });

  test('has a ".PopOver" wrapper', () => {
    const { container } = render(
      <PopOver {...props}>
        <span>trigger</span>
      </PopOver>
    );

    expect(container.querySelector('.PopOver')).toBeInTheDocument();
  });
});
