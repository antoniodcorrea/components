import React from 'react';
import { TextButton, TextButtonIcon } from '.';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  component: TextButton,
  title: 'TextButton',
  decorators: [withKnobs],
};

const knobs = {
  text: (): string => text('TextButton', 'Click me!'),
  icon: (): TextButtonIcon => select('Icon', ['ArrowRight'], 'ArrowRight'),
  disabled: (): boolean => boolean('Disabled', false),
};

export const Default: React.FC = () => (
  <TextButton text={knobs.text()} icon={knobs.icon()} disabled={knobs.disabled()} />
);
