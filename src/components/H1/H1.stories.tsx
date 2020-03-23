import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { H1 } from '.';

export default {
  component: H1,
  title: 'H1',
  decorators: [withKnobs],
};

const knobs = {
  text: (): string => text('Text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'),
};

export const Default: React.FC = () => {
  return <H1>{knobs.text()}</H1>;
};
