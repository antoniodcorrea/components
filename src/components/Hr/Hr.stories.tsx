import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Hr } from '.';

export default {
  component: Hr,
  title: 'Hr',
  decorators: [withKnobs],
};

const defaultProps = {};

const knobs = {
  type: () => select('Type', [undefined, 'spacer', 'shrink'], undefined),
  size: () => select('Size', [undefined, 'small', 'normal', 'big'], undefined),
};

export const Default = () => (
  <div style={{ width: '200px' }}>
    <Hr {...defaultProps} type={knobs.type()} size={knobs.size()} />
  </div>
);
