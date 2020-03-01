import React, { useState } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Select } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Span } from '../Span';
import { Button } from '../Button';

export default {
  component: Select,
  title: 'Select',
  decorators: [withKnobs],
};

const knobs = {
  grow: () => boolean('Grow', false),
};

export const Default = () => {
  const [value1, setValue1] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  const onSubmit = () => {
    console.log({ value1 });
    setSuccess(true);
  };

  return (
    <div onSubmit={onSubmit}>
      <H1>Select</H1>
      <Span size="small">You can select tags here as example</Span>
      <Hr type="spacer" />
      <Select
        grow={knobs.grow()}
        onChange={nextData => {
          console.log(JSON.stringify(nextData, null, 4));
          setValue1(nextData);
        }}
        value={value1}
      />
      <Hr type="spacer" />
      <Button text="Submit" onClick={onSubmit} success={success} />
    </div>
  );
};
