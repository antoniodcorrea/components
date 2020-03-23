import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Hr, HrType, HrSize } from '.';

export default {
  component: Hr,
  title: 'Hr',
  decorators: [withKnobs],
};

const defaultProps = {};

const knobs = {
  type: (): HrType => select('Type', [undefined, 'spacer', 'shrink'], undefined),
  size: (): HrSize => select('Size', [undefined, 'small', 'normal', 'big'], undefined),
};

export const Default: React.FC = () => (
  <div style={{ width: '200px' }}>
    <Hr {...defaultProps} type={knobs.type()} size={knobs.size()} />
  </div>
);
