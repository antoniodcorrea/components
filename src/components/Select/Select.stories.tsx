import React, { useState } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Select } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Span } from '../Span';
import { Button } from '../Button';
import { Input } from '../Input';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0ZTJiYjQ2LWMyMTAtNGE0Ny05ZTg0LWY0NWM3ODlmY2VjMSIsIm9yZGVyIjoxLCJuYW1lIjoiQW50b25pbyIsImVtYWlsIjoiYW50b25pby5kLmNvcnJlYUBnbWFpbC5jb20iLCJhY3RpdmUiOnRydWUsImxldmVsIjoiYWRtaW4iLCJpYXQiOjE1ODMwMDAzNDl9.snJHyzH8Td0Ot_F49Ve9yrw3nNE6JJAGLDp4vcrQKqA';
const API_URL = 'http://0.0.0.0:3000/v1/tags';

export default {
  component: Select,
  title: 'Select',
  decorators: [withKnobs],
};

const knobs = {
  grow: () => boolean('Grow', true),
  name: () => text('Name', 'name'),
  value: () => text('Value', 'Some value'),
  placeholder: () => text('Placeholder', 'placeholder'),
  label: () => text('Label', 'label'),
  readOnly: () => boolean('Read only', false),
  error: () => boolean('Error', false),
  success: () => boolean('Success', false),
  disabled: () => boolean('Disabled', false),
};

export const Default = () => {
  const [value1, setValue1] = useState(undefined);
  const [value2, setValue2] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  const onSubmit = () => {
    setSuccess(true);
  };

  return (
    <div onSubmit={onSubmit}>
      <H1>Select</H1>
      <Span size="small">You can select tags here as example</Span>
      <Hr spacer />
      <Select
        label="Some options"
        grow={knobs.grow()}
        onChange={(nextData) => {
          setValue1(nextData);
        }}
        value={value1}
        limit={4}
        apiUrl={API_URL}
        optionFilterFieldName="name"
        token={TOKEN}
      />

      <Hr spacer />
      <Input
        name={knobs.name()}
        label="Password"
        value={value2}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Hr spacer />
      <Button text="Submit" onClick={onSubmit} success={success} />
    </div>
  );
};
