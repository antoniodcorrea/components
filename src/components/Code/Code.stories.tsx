import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Code } from '.';

export default {
  component: Code,
  title: 'Code',
  decorators: [withKnobs],
};

const knobs = {
  code: () => object('Text', { a: 1, b: 2 }),
};

export const Default = () => <Code>{JSON.stringify(knobs.code(), null, 4)}</Code>;
