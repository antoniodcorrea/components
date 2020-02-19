import React from 'react';
import { Palette } from '.';

export default {
  component: Palette,
  title: 'Palette',
};

const defaultProps = {};

export const Default = () => {
  return <Palette {...defaultProps} />;
};
