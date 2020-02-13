import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import H3 from './H3';

export default {
  component: H3,
  title: 'H3',
  decorators: [withKnobs],
};

const defaultProps = {};

const knobs = {
  text: () => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
};

export const Default = () => {
  return <H3 {...defaultProps}>{knobs.text()}</H3>;
};
