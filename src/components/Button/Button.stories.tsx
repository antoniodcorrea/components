import React from 'react';
import { Button } from '.';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Hr } from '../Hr';

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
    <>
      <Button text={knobs.text()} disabled={knobs.disabled()} error={knobs.error()} success={knobs.success()}></Button>
      <Hr type="spacer" />
      <Button
        text={knobs.text()}
        disabled={knobs.disabled()}
        error={knobs.error()}
        success={knobs.success()}
        icon="ArrowRight"
      ></Button>
    </>
  );
};
