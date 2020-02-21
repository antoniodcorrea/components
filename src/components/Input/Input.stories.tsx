import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Input } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';

export default {
  component: Input,
  title: 'Input',
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
};

export const Empty = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  return (
    <div style={{ width: '300px' }}>
      <H1>Input</H1>
      <Hr type="spacer" />
      <Input
        name={knobs.name()}
        label="First data"
        value={value1}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        onChange={e => setValue1(e.target.value)}
      />
      <Input
        name={knobs.name()}
        label="Second value"
        value={value2}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        onChange={e => setValue2(e.target.value)}
      />
      <Input
        name={knobs.name()}
        label="Third value"
        value={value3}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        onChange={e => setValue3(e.target.value)}
      />
      <Hr type="spacer" />
    </div>
  );
};
