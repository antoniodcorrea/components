import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import VerticalSpacer from './VerticalSpacer';

export default {
  component: VerticalSpacer,
  title: 'VerticalSpacer',
  decorators: [withKnobs],
};

const defaultProps = {
  size: 'medium',
};

const knobs = {
  Size: () => select('Size', ['small', 'medium', 'big'], 'medium'),
};

export const Default = () => <VerticalSpacer {...defaultProps} size={knobs.Size()} />;
