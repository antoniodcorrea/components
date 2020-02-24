import React, { useState } from 'react';
import { Checkbox } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Border } from '../Border';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const Empty = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);

  return (
    <>
      <H1>Checkbox</H1>
      <Hr type="spacer" />
      <Border>
        <Checkbox
          value={value1}
          onChange={e => {
            setValue1(e.target.checked);
            console.log(e.target.checked);
          }}
          label="Checkbox 1"
        />
        <Hr type="spacer" size="micro" />
        <Checkbox
          value={value2}
          onChange={e => {
            setValue2(e.target.checked);
            console.log(e.target.checked);
          }}
          label="Checkbox 2"
        />
        <Hr type="spacer" size="micro" />
        <Checkbox
          value={value3}
          onChange={e => {
            setValue3(e.target.checked);
            console.log(e.target.checked);
          }}
          label="Checkbox 3"
        />
      </Border>
    </>
  );
};
