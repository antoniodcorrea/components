import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import H1 from './H1';

export default {
  component: H1,
  title: 'H1',
  decorators: [withKnobs],
};

const knobs = {
  text: () => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
  bold: () => boolean('Bold', false),
};

export const Default = () => {
  return <H1 bold={knobs.bold()}>{knobs.text()}</H1>;
};
