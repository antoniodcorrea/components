import React, { useState } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Radio } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { Border } from '../Border';

export default {
  component: Radio,
  title: 'Radio',
  decorators: [withKnobs],
};

const knobs = {
  grow: () => boolean('Grow', false),
  inline: () => boolean('Inline', false),
};

export const Empty = () => {
  const [value, setValue] = useState('2');

  return (
    <>
      <H1>Radio button</H1>
      <Hr type="spacer" size="micro" />
      <Hr size="micro" />
      <Hr type="spacer" />
      <Radio
        value={value}
        name="gender"
        options={[
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
          {
            value: '3',
            label: 'Option 3',
          },
        ]}
        onChange={e => {
          setValue(e.target.value);
          console.log({ value });
        }}
        grow={knobs.grow()}
        inline={knobs.inline()}
      />
      <Hr type="spacer" />
    </>
  );
};
