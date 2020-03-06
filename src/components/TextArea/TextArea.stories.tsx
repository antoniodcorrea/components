import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { TextArea } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Input } from '../Input';

export default {
  component: TextArea,
  title: 'TextArea',
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
  const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab est qui reiciendis, sint vero aperiam vel soluta, mollitia laboriosam voluptate rem sed odit architecto labore ut harum libero perferendis!'
  );
  const [value2, setValue2] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab est qui reiciendis, sint vero aperiam vel soluta, mollitia laboriosam voluptate rem sed odit architecto labore ut harum libero perferendis!'
  );

  return (
    <div>
      <H1>TextArea</H1>
      <Hr size="nano" />
      <Hr type="spacer" />
      <TextArea
        name={knobs.name()}
        label="My textarea"
        value={value}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        onChange={e => setValue(e.target.value)}
      />
      <Hr type="spacer" size="normal" />
      <Hr type="shrink" size="block" />
      <Input
        name={knobs.name()}
        label="My date"
        value={value2}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        onChange={e => setValue2(e.target.value)}
      />
    </div>
  );
};
