import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const defaultProps = {
  className: 'Input-input',
  disabled: false,
  id: 'Input-1',
  placeholder: '',
  readOnly: false,
  type: 'text',
  value: 'How',
};

export const Empty = () => {
  return <Input />;
};

export const Filled = () => {
  return <Input {...defaultProps} />;
};
