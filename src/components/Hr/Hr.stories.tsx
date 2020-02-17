import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Hr from './Hr';

export default {
  component: Hr,
  title: 'Hr',
  decorators: [withKnobs],
};

const defaultProps = {};

const knobs = {
  type: () => select('Type', [undefined, 'transparent', 'shrink'], undefined),
};

export const Default = () => (
  <div style={{ width: '200px' }}>
    <Hr {...defaultProps} type={knobs.type()} />
  </div>
);
