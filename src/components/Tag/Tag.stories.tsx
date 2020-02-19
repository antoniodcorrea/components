import React from 'react';
import { Tag } from '.';

export default {
  component: Tag,
  title: 'Tag',
};

export const Default = () => {
  return <Tag>Tag</Tag>;
};

export const Alternate = () => {
  return <Tag variant="alternate">Tag</Tag>;
};
