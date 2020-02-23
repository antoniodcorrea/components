import React, { useState } from 'react';
import { Radio } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { Code } from '../Code';

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
        onChange={e => setValue(e.target.value)}
      />
      <Hr type="spacer" size="big" />
      <Hr size="big" />
      <Hr type="spacer" size="big" />
      <Code>{JSON.stringify({ value }, null, 4)}</Code>
    </>
  );
};
