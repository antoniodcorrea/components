import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Tag, Notification } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Tag,
  title: 'Tag',
  decorators: [withKnobs],
};

const knobs = {
  notification: (): Notification => select('Notification', ['success', 'error', 'alert', undefined], undefined),
};

export const Default: React.FC = () => (
  <div style={{ padding: '10px' }}>
    <H1>Tag</H1>
    <Hr spacer />
    <Tag notification={knobs.notification()}>Tag</Tag>
    <Hr spacer />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Cool</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Yeah</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Rock</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Lalala</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>This</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>That</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Lorem</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Red</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Alert</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Articles</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Foo</Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()}>Bar</Tag>
      </div>
    </div>
  </div>
);

export const Alternate: React.FC = () => {
  return (
    <>
      <H1>Tag</H1>
      <Hr spacer />
      <Tag variant="alternate" notification={knobs.notification()}>
        Tag
      </Tag>
    </>
  );
};
