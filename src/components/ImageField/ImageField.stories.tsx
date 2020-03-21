import React, { useState } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { ImageField } from '.';
import { WithUploadLogic } from '../WithUploadLogic/WithUploadLogic';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: ImageField,
  title: 'ImageField',
  decorators: [withKnobs],
};

const knobs = {
  grow: () => boolean('Grow', false),
  error: () => boolean('Error', false),
  success: () => boolean('Success', false),
  rounded: () => boolean('Rounded', false),
  disabled: () => boolean('Disabled', false),
  maxLength: () => number('Max length', undefined),
  url: () => text('Url', 'https://i.picsum.photos/id/1067/1500/1000.jpg'),
};

export const Default = () => {
  const [value, setValue] = useState(undefined);
  const ImageFieldWithUploadApi = WithUploadLogic(ImageField);

  return (
    <>
      <H1>Image field</H1>
      <Hr type="spacer" size="big" />
      <ImageFieldWithUploadApi
        label="My file"
        name="Some file"
        maxLength={knobs.maxLength()}
        disabled={knobs.disabled()}
        grow={knobs.grow()}
        rounded={knobs.rounded()}
        urlApiUpload="http://0.0.0.0:3000/api/v1/upload"
        url={value}
        onUploaded={url => setValue(url)}
        onRemove={() => setValue(undefined)}
      />
    </>
  );
};
