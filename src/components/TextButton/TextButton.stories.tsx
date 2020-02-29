import React from 'react';
import { TextButton } from '.';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  component: TextButton,
  title: 'TextButton',
  decorators: [withKnobs],
};

const knobs = {
  text: () => text('TextButton', 'Click me!'),
  icon: () => select('Icon', ['ArrowRight'], 'ArrowRight'),
  disabled: () => boolean('Disabled', false),
};

export const Default = () => <TextButton text={knobs.text()} icon={knobs.icon()} disabled={knobs.disabled()} />;
