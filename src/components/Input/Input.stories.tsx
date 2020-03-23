import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Input } from '.';
import { Hr } from '../Hr';
import { H1 } from '../H1';
import { Button } from '../Button';

export default {
  component: Input,
  title: 'Input',
  decorators: [withKnobs],
};

const knobs = {
  name: (): string => text('Name', 'name'),
  value: (): string => text('Value', 'Some value'),
  placeholder: (): string => text('Placeholder', 'placeholder'),
  label: (): string => text('Label', 'label'),
  readOnly: (): boolean => boolean('Read only', false),
  error: (): boolean => boolean('Error', false),
  success: (): boolean => boolean('Success', false),
  disabled: (): boolean => boolean('Disabled', false),
  grow: (): boolean => boolean('Grow', false),
};

export const Empty: React.FC = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [success, setSuccess] = useState(undefined);

  const onSubmit = (): void => {
    setSuccess(true);
  };

  return (
    <div onSubmit={onSubmit}>
      <H1>Input</H1>
      <Hr type="spacer" />

      <Hr type="spacer" size="block" />
      <Input
        type="date"
        name={knobs.name()}
        label="My date"
        value={value4}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        onChange={(e): void => setValue4(e.target.value)}
      />
      <Hr type="spacer" size="block" />
      <Input
        name={knobs.name()}
        label="Insert password"
        value={value2}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        onChange={(e): void => setValue2(e.target.value)}
      />
      <Hr type="spacer" size="block" />
      <Input
        name={knobs.name()}
        label="Repeat password"
        value={value3}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        onChange={(e): void => setValue3(e.target.value)}
      />
      <Hr type="spacer" size="block" />
      <Input
        type="search"
        name={knobs.name()}
        label="Search"
        value={value1}
        readOnly={knobs.readOnly()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        onChange={(e): void => setValue1(e.target.value)}
      />
      <Hr type="spacer" />
      <Button text="Submit" onClick={onSubmit} success={success} grow={knobs.grow()} />
    </div>
  );
};
