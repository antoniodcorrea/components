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
  text: (): string => text('Button', 'Click me!'),
  grow: (): boolean => boolean('Grow', false),
  disabled: (): boolean => boolean('Disabled', false),
  success: (): boolean => boolean('Success', false),
  error: (): boolean => boolean('Error', false),
};

export const Default: React.FC = () => {
  return (
    <>
      <Button
        text={knobs.text()}
        grow={knobs.grow()}
        disabled={knobs.disabled()}
        error={knobs.error()}
        success={knobs.success()}
      ></Button>
      <Hr type="spacer" />
      <Button
        text={knobs.text()}
        grow={knobs.grow()}
        disabled={knobs.disabled()}
        error={knobs.error()}
        success={knobs.success()}
        icon="ArrowRight"
      ></Button>
    </>
  );
};
