import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { A } from '.';

export default {
  component: A,
  title: 'A',
  decorators: [withKnobs],
};

const knobs = {
  href: (): string => text('Href', 'http://example.com'),
  text: (): string => text('Text', 'Click me!'),
  styled: (): boolean => boolean('Styled', true),
  targetBlank: (): boolean => boolean('Target', false),
};

export const Default: React.FC = () => (
  <A onClick={action('button-click')} targetBlank={knobs.targetBlank()} href={knobs.href()} styled={knobs.styled()}>
    {knobs.text()}
  </A>
);
