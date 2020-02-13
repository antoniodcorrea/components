import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import H1 from './H1';

export default {
  component: H1,
  title: 'H1',
  decorators: [withKnobs],
};

const knobs = {
  text: () => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
};

export const Default = () => {
  return <H1>{knobs.text()}</H1>;
};
