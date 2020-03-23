import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { H4 } from '.';

export default {
  component: H4,
  title: 'H4',
  decorators: [withKnobs],
};

const knobs = {
  text: (): string => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
};

export const Default: React.FC = () => {
  return <H4>{knobs.text()}</H4>;
};
