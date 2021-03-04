import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Tag, Notification, Size } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { A } from '../A';

export default {
  component: Tag,
  title: 'Tag',
  decorators: [withKnobs],
};

const knobs = {
  notification: (): Notification => select('Notification', ['success', 'error', 'alert', undefined], undefined),
  size: (): Size => select('Size', ['small', 'medium', 'big', undefined], undefined),
  variant: (): undefined | 'dark' => select('Variant', [undefined, 'dark'], undefined),
};

export const Default: React.FC = () => (
  <div style={{ padding: '10px' }}>
    <H1>Tag</H1>
    <Hr spacer />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: '0 8px 8px 0' }}>
        <A href="/" styled={false}>
          <Tag notification={knobs.notification()} size={knobs.size()}>
            Tag
          </Tag>
        </A>
      </div>
      <div style={{ margin: '0 8px 8px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Yeah
        </Tag>
      </div>
      <div style={{ margin: '0 8px 8px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Rock
        </Tag>
      </div>
      <div style={{ margin: '0 8px 8px 0' }}>
        <Tag notification={knobs.notification()} size={knobs.size()}>
          Lalala
        </Tag>
      </div>
    </div>
  </div>
);

export const Dark: React.FC = () => {
  return (
    <div style={{ padding: '10px' }}>
      <H1>Tag</H1>
      <Hr spacer />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 8px 8px 0' }}>
          <A href="/" styled={false}>
            <Tag variant="dark" notification={knobs.notification()} size={knobs.size()}>
              Tag
            </Tag>
          </A>
        </div>
        <div style={{ margin: '0 8px 8px 0' }}>
          <Tag variant="dark" notification={knobs.notification()} size={knobs.size()}>
            Yeah
          </Tag>
        </div>
        <div style={{ margin: '0 8px 8px 0' }}>
          <Tag variant="dark" notification={knobs.notification()} size={knobs.size()}>
            Rock
          </Tag>
        </div>
        <div style={{ margin: '0 8px 8px 0' }}>
          <Tag variant="dark" notification={knobs.notification()} size={knobs.size()}>
            Lalala
          </Tag>
        </div>
      </div>
    </div>
  );
};

export const Simple: React.FC = () => {
  return (
    <div style={{ padding: '10px' }}>
      <H1>Tag</H1>
      <Hr spacer />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 8px 8px 0' }}>
          <A href="/" styled={false}>
            <Tag variant="simple" notification={knobs.notification()} size="nano">
              Tag
            </Tag>
          </A>
        </div>
        <div style={{ margin: '0 8px 8px 0' }}>
          <Tag variant="simple" notification={knobs.notification()} size="nano">
            Yeah
          </Tag>
        </div>
        <div style={{ margin: '0 8px 8px 0' }}>
          <Tag variant="simple" notification={knobs.notification()} size="nano">
            Rock
          </Tag>
        </div>
        <div style={{ margin: '0 8px 8px 0' }}>
          <Tag variant="simple" notification={knobs.notification()} size="nano">
            Lalala
          </Tag>
        </div>
      </div>
    </div>
  );
};
