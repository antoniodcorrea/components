import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import H4 from './H4';

export default {
  component: H4,
  title: 'H4',
  decorators: [withKnobs],
};

const defaultProps = {};

const knobs = {
  text: () => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
};

export const Default = () => {
  return <H4 {...defaultProps}>{knobs.text()}</H4>;
};
