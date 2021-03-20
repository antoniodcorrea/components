import React from 'react';
import { Ellipsis } from '.';
import { select, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Ellipsis',
  component: Ellipsis,
  decorators: [withKnobs],
};

const size = () => select('Size', [undefined, 'normal', 'small', 'micro', 'nano'], undefined);

export const Default = () => {
  return <Ellipsis size={size()} />;
};
