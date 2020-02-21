import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Tag } from '.';

export default {
  component: Tag,
  title: 'Tag',
  decorators: [withKnobs],
};

const knobs = {
  notification: () => select('Notification', ['success', 'alert', 'error', null], null),
};

export const Default = () => {
  return <Tag notification={knobs.notification()}>Tag</Tag>;
};

export const Alternate = () => {
  return (
    <Tag variant="alternate" notification={knobs.notification()}>
      Tag
    </Tag>
  );
};
