import React from 'react';
import H3 from './H3';

export default {
  component: H3,
  title: 'H3',
};

const defaultProps = {};

export const Default = () => {
  return <H3 {...defaultProps}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</H3>;
};
