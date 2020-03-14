import React from 'react';
import { FileField } from '.';
import { FileField as FileFieldUi } from './FileField';
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
  <FileFieldUi
    onChange={actions.onChange}
    onRemove={actions.onRemove}
    label="My file"
    name="Some file"
    removable
    maxLength={10}
    url="/myUrl/este_es_mi_super_file.pdf"
  />
);
