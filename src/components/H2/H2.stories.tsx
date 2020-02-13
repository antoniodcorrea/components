import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import H2 from './H2';

export default {
  component: H2,
  title: 'H2',
  decorators: [withKnobs],
};

const defaultProps = {};

const knobs = {
  text: () => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
};

export const Default = () => {
  return <H2 {...defaultProps}>{knobs.text()}</H2>;
};
