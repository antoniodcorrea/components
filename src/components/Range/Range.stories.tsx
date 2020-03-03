import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Range } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';

export default {
  component: Range,
  title: 'Range',
  decorators: [withKnobs],
};

const knobs = {
  name: () => text('Name', 'name'),
  value: () => text('Value', 'Some value'),
  placeholder: () => text('Placeholder', 'placeholder'),
  label: () => text('Label', 'label'),
  readOnly: () => boolean('Read only', false),
  error: () => boolean('Error', false),
  success: () => boolean('Success', false),
  disabled: () => boolean('Disabled', false),
  grow: () => boolean('Grow', false),
};

export const Empty = () => {
  const [value1, setValue1] = useState('');

  return (
    <div>
      <H1>Range</H1>
      <Hr type="spacer" />
      <Range
        name="My Range"
        label="This is my range"
        value={value1}
        onChange={e => setValue1(e.target.value)}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        min={0}
        max={100}
      />
      <Hr type="spacer" />
    </div>
  );
};
