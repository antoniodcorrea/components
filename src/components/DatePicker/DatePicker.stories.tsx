import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { DatePicker } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';

export default {
  component: DatePicker,
  title: 'DatePicker',
  decorators: [withKnobs],
};

const knobs = {
  value: () => text('Value', 'Some value'),
  placeholder: () => text('Placeholder', 'placeholder'),
  label: () => text('Label', 'label'),
  readOnly: () => boolean('Read only', false),
  inline: () => boolean('Inline', false),
  error: () => boolean('Error', false),
  success: () => boolean('Success', false),
  disabled: () => boolean('Disabled', false),
  grow: () => boolean('Grow', false),
};

export const Empty = () => {
  const [value1, setValue1] = useState(undefined);

  return (
    <>
      <H1>DatePicker</H1>
      <Hr type="spacer" />
      <DatePicker
        name="Date"
        label="Date"
        inline={knobs.inline()}
        value={value1}
        onChange={date => {
          setValue1(date);
        }}
      />
      <Hr type="spacer" />
    </>
  );
};
