import React, { useState } from 'react';
import { Checkbox } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Border } from '../Border';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const Empty: React.FC = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(false);

  return (
    <>
      <H1>Checkbox</H1>
      <Hr type="spacer" />
      <Border>
        <Checkbox value={value1} onChange={(e): void => setValue1(e.target.checked)} label="Checkbox 1" />
        <Hr type="spacer" size="micro" />
        <Checkbox value={value2} onChange={(e): void => setValue2(e.target.checked)} label="Checkbox 2" />
        <Hr type="spacer" size="micro" />
        <Checkbox value={value3} onChange={(e): void => setValue3(e.target.checked)} label="Checkbox 3" />
      </Border>
    </>
  );
};
