import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Hr, HrSize } from '.';
import { Flex } from '../Flex';

export default {
  component: Hr,
  title: 'Hr',
  decorators: [withKnobs],
};

const defaultProps = {};

const knobs = {
  spacer: (): boolean => boolean('Spacer', false),
  size: (): HrSize => select('Size', [undefined, 'zero', 'nano', 'micro', 'small', 'normal', 'big'], undefined),
};

export const Default: React.FC = () => (
  <Flex>
    <span>lajsdljalksdj</span>
    <Hr {...defaultProps} spacer={knobs.spacer()} size={knobs.size()} />
    <span>lajsdljalksdj</span>
  </Flex>
);
