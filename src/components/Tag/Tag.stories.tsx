import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Tag, Notification, Size } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Tag,
  title: 'Tag',
  decorators: [withKnobs],
};

const knobs = {
  notification: (): Notification => select('Notification', ['success', 'error', 'alert', undefined], undefined),
  size: (): Size => select('Size', ['small', 'medium', 'big', undefined], undefined),
};

export const Default: React.FC = () => (
  <div style={{ padding: '10px' }}>
    <H1>Tag</H1>
    <Hr spacer />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Cool
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Yeah
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Rock
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Lalala
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          This
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          That
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Lorem
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Red
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Alert
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Articles
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Foo
        </Tag>
      </div>
      <div style={{ margin: '0 4px 4px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Bar
        </Tag>
      </div>
    </div>
  </div>
);

export const Alternate: React.FC = () => {
  return (
    <>
      <H1>Tag</H1>
      <Hr spacer />
      <Tag variant="alternate" notification={knobs.notification()} size={knobs.size()}>
        Tag
      </Tag>
    </>
  );
};
