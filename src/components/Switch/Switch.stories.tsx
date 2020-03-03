import React, { useState } from 'react';
import { Switch } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Border } from '../Border';

export default {
  component: Switch,
  title: 'Switch',
};

export const Empty = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(false);

  return (
    <>
      <H1>Switches</H1>
      <Hr type="spacer" />
      <Border>
        <Switch
          name="Test"
          label="Test"
          checked={value1}
          onChange={e => {
            console.log(e.target.checked);
            setValue1(e.target.checked);
          }}
        />
        <Hr type="spacer" size="small" />
        <Switch
          name="Test2"
          label="Test2"
          checked={value2}
          onChange={e => {
            console.log(e.target.checked);
            setValue2(e.target.checked);
          }}
        />
        <Hr type="spacer" size="small" />
        <Switch
          name="Test3"
          label="Test3"
          checked={value3}
          onChange={e => {
            console.log(e.target.checked);
            setValue3(e.target.checked);
          }}
        />
        <Hr type="spacer" size="small" />
      </Border>
      <Hr type="spacer" />
      <Hr size="micro" />
    </>
  );
};
