import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Border } from '.';
import { Span } from '../Span';

export default {
  component: Border,
  title: 'Border',
  decorators: [withKnobs],
};

const knobs = {
  text: (): string => text('Text', 'Lorem ipsum dolor'),
  grow: (): boolean => boolean('Grow', false),
};

export const Default: React.FC = () => {
  return (
    <div style={{ width: '300px' }}>
      <Border grow={knobs.grow()}>
        <Span bold>{knobs.text()}</Span>
      </Border>
    </div>
  );
};
