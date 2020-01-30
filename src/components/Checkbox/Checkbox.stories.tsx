import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

const defaultProps = {
  id: '1',
  title: 'Test Checkbox',
  state: 'default',
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => {
  return <Checkbox {...defaultProps} />;
};

export const Checked = () => <Checkbox {...defaultProps} state="checked" />;
