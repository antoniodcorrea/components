import React from 'react';
import { Button } from '.';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

const knobs = {
  text: () => text('Button', 'Click me!'),
  disabled: () => boolean('Disabled', false),
  error: () => boolean('Error', false),
  success: () => boolean('Success', false),
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.3 28.3">
        <path d="M5.7 25.5l2.8 2.8 14.2-14.1L8.5 0 5.7 2.8 17 14.2z" />
      </svg>
    </Button>
  );
};
