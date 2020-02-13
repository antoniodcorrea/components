import React from 'react';
import H4 from './H4';

export default {
  component: H4,
  title: 'H4',
};

const defaultProps = {};

export const Default = () => {
  return <H4 {...defaultProps}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</H4>;
};
