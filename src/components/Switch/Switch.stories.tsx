import React, { useState } from 'react';
import { Switch } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Border } from '../Border';

export default {
  component: Switch,
  title: 'Switch',
};

export const Empty: React.FC = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(false);

  return (
    <>
      <H1>Switches</H1>
      <Hr spacer />
      <Border>
        <Switch name="Test" checked={value1} onChange={(e): void => setValue1(e.currentTarget.checked)} />
        <Hr spacer size="small" />
        <Switch name="Test2" checked={value2} onChange={(e): void => setValue2(e.currentTarget.checked)} />
        <Hr spacer size="small" />
        <Switch name="Test3" checked={value3} onChange={(e): void => setValue3(e.currentTarget.checked)} />
        <Hr spacer size="small" />
      </Border>
      <Hr spacer />
      <Hr size="micro" />
    </>
  );
};
