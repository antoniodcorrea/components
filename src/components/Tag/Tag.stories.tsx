import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Tag } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Tag,
  title: 'Tag',
  decorators: [withKnobs],
};

const knobs = {
  notification: () => select('Notification', ['success', 'alert', 'error', undefined], undefined),
};

export const Default = () => (
  <>
    <H1>Tag</H1>
    <Hr type="spacer" />
    <Tag notification={knobs.notification()}>Tag</Tag>
  </>
);

export const Alternate = () => {
  return (
    <>
      <H1>Tag</H1>
      <Hr type="spacer" />
      <Tag variant="alternate" notification={knobs.notification()}>
        Tag
      </Tag>
    </>
  );
};
