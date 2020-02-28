import React from 'react';
import { Button } from '.';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Check } from '../Svg';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

const knobs = {
  text: () => text('Button', 'Click me!'),
  disabled: () => boolean('Disabled', false),
  success: () => boolean('Success', false),
  error: () => boolean('Error', false),
};

export const Default = () => {
  return (
    <Button disabled={knobs.disabled()} error={knobs.error()} success={knobs.success()}>
      {knobs.text()}
    </Button>
  );
};

export const WithIcon = () => {
  return (
    <Button disabled={knobs.disabled()} error={knobs.error()} success={knobs.success()}>
      {knobs.text()}
      <Check />
    </Button>
  );
};
