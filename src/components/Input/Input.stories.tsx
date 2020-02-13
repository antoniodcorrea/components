import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
  decorators: [withKnobs],
};

const defaultProps = {
  placeholder: 'Placeholder',
};

const knobs = {
  className: () => text('Class', 'aClass.'),
  disabled: () => boolean('Disabled', false),
  readOnly: () => boolean('Read only', false),
  type: () => text('Type', 'text'),
  value: () => text('Value', 'How'),
};

export const Empty = () => (
  <Input
    {...defaultProps}
    className={knobs.className()}
    disabled={knobs.disabled()}
    readOnly={knobs.readOnly()}
    type={knobs.type()}
    value={knobs.value()}
  />
);

export const Filled = () => (
  <Input
    {...defaultProps}
    className={knobs.className()}
    disabled={knobs.disabled()}
    readOnly={knobs.readOnly()}
    type={knobs.type()}
    value={knobs.value()}
  />
);
