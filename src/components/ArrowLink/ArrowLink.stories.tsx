import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { ArrowLink, Size } from '.';

export default {
  component: ArrowLink,
  title: 'ArrowLink',
  decorators: [withKnobs],
};

const knobs = {
  text: (): string => text('Text', 'The quick brown fox jumps over the lazy dog'),
  size: (): Size => select('Size', ['small', 'normal'], 'normal'),
};

export const Default: React.FC = () => <ArrowLink size={knobs.size()}>{knobs.text()}</ArrowLink>;
