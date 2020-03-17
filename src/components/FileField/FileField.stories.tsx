import React, { useState } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { FileField } from '.';
import { FileFieldWithMulter } from './FileFieldWithMulter';
import { Hr } from '../Hr';

export default {
  component: FileField,
  title: 'FileField',
  decorators: [withKnobs],
};

const knobs = {
  grow: () => boolean('Grow', false),
  maxLength: () => number('Max length', undefined),
  removable: () => boolean('Removable', true),
  url: () => text('Url', 'https://antoniodiaz.me/cv/antonio_diaz_correa_cv.pdf'),
};

export const Default = () => {
  const [value1, setValue1] = useState(undefined);
  const [value2, setValue2] = useState(undefined);

  return (
    <>
      <Hr type="spacer" size="big" />
      <FileFieldWithMulter
        label="My file"
        name="Some file"
        removable={knobs.removable()}
        maxLength={knobs.maxLength()}
        grow
        url={value1}
        urlApiUpload="http://0.0.0.0:3000/api/v1/upload"
        onChange={url => setValue1(url)}
        onRemove={() => setValue1(undefined)}
      />
      <Hr type="spacer" size="big" />
      <FileField
        label="My file"
        name="Some file"
        removable={knobs.removable()}
        maxLength={knobs.maxLength()}
        url={value2}
        grow
        onChange={event => setValue2(event.target.value)}
        onRemove={() => setValue2(undefined)}
      />
    </>
  );
};
