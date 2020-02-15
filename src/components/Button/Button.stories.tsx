import React from 'react';
import Button from './Button';
import Layout from '../../../tools/components/Layout/Layout';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

const knobs = {
  text: () => text('Button', 'Click me!'),
  disabled: () => boolean('Disabled', false),
  error: () => boolean('Error', false),
  success: () => boolean('Success', false),
};

export const Default = () => {
  return (
    <Layout>
      <Button disabled={knobs.disabled()} error={knobs.error()} success={knobs.success()}>
        {knobs.text()}
      </Button>
    </Layout>
  );
};

export const WithIcon = () => {
  return (
    <Layout>
      <Button disabled={knobs.disabled()} error={knobs.error()} success={knobs.success()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.3 28.3">
          <circle cx="14.2" cy="14.2" r="14.2" />
        </svg>
        {knobs.text()}
      </Button>
    </Layout>
  );
};
