import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { A } from '.';

export default {
  component: A,
  title: 'A',
  decorators: [withKnobs],
};

const defaultProps = {
  onClick: action('button-click'),
};

const knobs = {
  href: () => text('Href', 'http://example.com'),
  text: () => text('Text', 'Click me!'),
  styled: () => boolean('Styled', true),
  targetBlank: () => boolean('Target', false),
};

export const Default = () => (
  <A {...defaultProps} targetBlank={knobs.targetBlank()} href={knobs.href()} styled={knobs.styled()}>
    {knobs.text()}
  </A>
);
