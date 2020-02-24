import React, { useState } from 'react';
import { Radio } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { Border } from '../Border';

export default {
  component: Radio,
  title: 'Radio',
};

export const Empty = () => {
  const [value, setValue] = useState('2');

  return (
    <>
      <H1>Radio button</H1>
      <Hr type="spacer" />
      <Border>
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
        />
      </Border>
      <Hr type="spacer" />
      <Hr />
      <Hr type="spacer" size="big" />
    </>
  );
};
