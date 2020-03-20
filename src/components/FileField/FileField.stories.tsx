import React, { useState } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { FileField, FileFieldWithUploadApi } from '.';
import { FileFieldWithMulter } from './FileFieldWithMulter';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: FileField,
  title: 'FileField',
  decorators: [withKnobs],
};

const knobs = {
  grow: () => boolean('Grow', false),
  error: () => boolean('Error', false),
  success: () => boolean('Success', false),
  disabled: () => boolean('Disabled', false),
  maxLength: () => number('Max length', undefined),
  removable: () => boolean('Removable', true),
  url: () => text('Url', 'https://antoniodiaz.me/cv/antonio_diaz_correa_cv.pdf'),
};

export const Default = () => {
  const [value, setValue] = useState(undefined);

  return (
    <>
      <H1>File field</H1>
      <Hr type="spacer" size="big" />
      <FileField
        label="My file"
        name="Some file"
        removable={knobs.removable()}
        maxLength={knobs.maxLength()}
        url={value}
        grow={knobs.grow()}
        error={knobs.error()}
        success={knobs.success()}
        disabled={knobs.disabled()}
        onChange={event => setValue(event.target.value)}
        onRemove={() => setValue(undefined)}
      />
    </>
  );
};

export const ExampleFileFieldWithUploadApi = () => {
  const [value, setValue] = useState(undefined);

  return (
    <>
      <H1>File field</H1>
      <Hr type="spacer" size="big" />
      <FileFieldWithUploadApi
        label="My file"
        name="Some file"
        removable={knobs.removable()}
        maxLength={knobs.maxLength()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        url={value}
        urlApiUpload="http://0.0.0.0:3000/api/v1/upload"
        onUploaded={url => setValue(url)}
        onRemove={() => setValue(undefined)}
      />
    </>
  );
};

export const WithMulter = () => {
  const [value, setValue] = useState(undefined);

  return (
    <>
      <H1>File field</H1>
      <Hr type="spacer" size="big" />
      <FileFieldWithMulter
        label="My file"
        name="Some file"
        removable={knobs.removable()}
        maxLength={knobs.maxLength()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        url={value}
        urlApiUpload="http://0.0.0.0:3000/api/v1/upload"
        onUploaded={url => setValue(url)}
        onRemove={() => setValue(undefined)}
      />
    </>
  );
};
