import React from 'react';
import { render } from '@testing-library/react';

import { Tooltip } from '.';

const props = {
  parentElementId: 'someId',
  content: 'Some content',
};

describe('Tooltip', () => {
  test('component renders', () => {
    const { container } = render(<Tooltip {...props} />);
    expect(container.firstChild).not.toBeNull();
  });

  test('has a ".Tooltip" wrapper', () => {
    const { container } = render(<Tooltip {...props} />);
    expect(container.querySelector('.Tooltip')).not.toBeNull();
  });
});
