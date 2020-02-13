import React from 'react';
import H1 from './H1';

export default {
  component: H1,
  title: 'H1',
};

const defaultProps = {};

export const Default = () => {
  return <H1 {...defaultProps}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</H1>;
};
