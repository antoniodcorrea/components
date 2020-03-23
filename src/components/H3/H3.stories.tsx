import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { H3 } from '.';

export default {
  component: H3,
  title: 'H3',
  decorators: [withKnobs],
};

const knobs = {
  text: (): string => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
};

export const Default: React.FC = () => {
  return <H3>{knobs.text()}</H3>;
};
