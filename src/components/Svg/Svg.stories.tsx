import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Triangle, Circle, Square, Check } from '.';

export default {
  component: Triangle,
  title: 'Svg',
  decorators: [withKnobs],
};

const knobs = {
  name: () => select('Name', ['square', 'triangle', 'circle'], 'circle'),
  size: () => select('Size', ['nano', 'micro', 'small', 'normal', 'medium', 'big', 'biggest', 'huge'], 'biggest'),
};

export const Icons = () => (
  <>
    <Triangle size={knobs.size()} />
    <Square size={knobs.size()} />
    <Circle size={knobs.size()} />
    <Check size={knobs.size()} />
  </>
);
