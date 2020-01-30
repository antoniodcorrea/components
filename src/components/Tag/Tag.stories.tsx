import React from 'react';
import Tag from './Tag';

export default {
  component: Tag,
  title: 'Tag',
};

export const Default = () => {
  return <Tag>My tag</Tag>;
};

export const Big = () => {
  return <Tag size="big">My tag</Tag>;
};

export const Small = () => {
  return <Tag>My tag</Tag>;
};
