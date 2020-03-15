import React from 'react';
import { FileField } from '.';
import { FileField as FileFieldUi } from './FileField';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: FileField,
  title: 'FileField',
  decorators: [withKnobs],
};

const actions = {
  onChange: action('on-change'),
  onRemove: action('on-remove'),
};

const knobs = {
  grow: () => boolean('Grow', false),
  maxLength: () => number('Max length', undefined),
  removable: () => boolean('Removable', true),
  url: () => text('Url', 'https://antoniodiaz.me/cv/antonio_diaz_correa_cv12345678901234567890.pdf'),
};

export const Default = () => (
  <FileFieldUi
    onChange={actions.onChange}
    onRemove={actions.onRemove}
    label="My file"
    name="Some file"
    removable={knobs.removable()}
    maxLength={knobs.maxLength()}
    url={knobs.url()}
    grow={knobs.grow()}
  />
);
