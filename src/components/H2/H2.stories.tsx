import React from 'react';
import H2 from './H2';

export default {
  component: H2,
  title: 'H2',
};

const defaultProps = {};

export const Default = () => {
  return <H2 {...defaultProps}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</H2>;
};
