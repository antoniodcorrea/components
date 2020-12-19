import React from 'react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { Border } from '.';
import { Span } from '../Span';

export default {
  component: Border,
  title: 'Border',
  decorators: [withKnobs],
};

const knobs = {
  weight: (): 'thin' | 'thick' => select('Border', ['thin', 'thick'], 'thin'),
  padding: (): 'small' | 'normal' | 'big' => select('Padding', ['small', 'normal', 'big'], 'normal'),
  text: (): string => text('Text', 'Lorem ipsum dolor'),
  grow: (): boolean => boolean('Grow', false),
};

export const Default: React.FC = () => {
  return (
    <div style={{ width: '300px' }}>
      <Border grow={knobs.grow()} weight={knobs.weight()} padding={knobs.padding()}>
        <Span bold>{knobs.text()}</Span>
      </Border>
    </div>
  );
};
