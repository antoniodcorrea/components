import React from 'react';
import { FileField } from '.';
import { FileField2 } from './FileField2';
import { withKnobs, files } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Hr } from '../Hr';

export default {
  component: FileField,
  title: 'FileField',
  decorators: [withKnobs],
};

const actions = {
  onChange: action('on-change'),
  onRemove: action('on-remove'),
};

export const Default = () => (
  <>
    <FileField
      value={undefined}
      label="This is the label"
      textButton="Upload file"
      originalName="This is the original name"
      removable
      urlApi="http://0.0.0.0:3000/api/v1/upload"
    />
    <Hr type="spacer" />
    <FileField2
      onChange={actions.onChange}
      onRemove={actions.onRemove}
      label="This is the label"
      textButton="Upload file"
      name="Some file"
      removable
      url="/myUrl/myFile.pdf"
    />
  </>
);
