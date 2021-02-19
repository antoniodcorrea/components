import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { ArrowLink, Size } from '.';
import { IconsType } from 'components/Svg';

export default {
  component: ArrowLink,
  title: 'ArrowLink',
  decorators: [withKnobs],
};

const knobs = {
  href: (): string => text('Href', 'http://example.com'),
  text: (): string => text('Text', 'The quick brown fox jumps over the lazy dog'),
  styled: (): boolean => boolean('Styled', true),
  targetBlank: (): boolean => boolean('Target', false),
  disabled: (): boolean => boolean('Disabled', false),
  underlined: (): boolean => boolean('Underlined', false),
  size: (): Size => select('Size', ['small', 'normal'], 'normal'),
};

export const Default: React.FC = () => (
  <ArrowLink
    onClick={action('button-click')}
    targetBlank={knobs.targetBlank()}
    href={knobs.href()}
    disabled={knobs.disabled()}
    size={knobs.size()}
  >
    {knobs.text()}
  </ArrowLink>
);
