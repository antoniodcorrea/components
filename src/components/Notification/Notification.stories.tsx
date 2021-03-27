import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Notification } from '.';
import { Hr } from '../Hr';
import { A } from '../A';

export default {
  component: Notification,
  title: 'Notification',
  decorators: [withKnobs],
};

export const Default: React.FC = () => (
  <>
    <Notification type="success" title="This is a notification">
      Something happened, click{' '}
      <A href="https://google.es" targetBlank frontend underlined>
        here
      </A>{' '}
      to know more{' '}
    </Notification>
    <Hr spacer size="small" />
    <Notification type="alert" title="This is a notification">
      Something happened, click{' '}
      <A href="https://google.es" targetBlank frontend underlined>
        here
      </A>{' '}
      to know more{' '}
    </Notification>
    <Hr spacer size="small" />
    <Notification type="error" title="This is a notification">
      Something happened, click{' '}
      <A href="https://google.es" targetBlank frontend underlined>
        here
      </A>{' '}
      to know more{' '}
    </Notification>
  </>
);
