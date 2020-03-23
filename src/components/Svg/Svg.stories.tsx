import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { IconSize, Triangle, Circle, Square, Check, Cross, ArrowRight, ArrowDown, ArrowLeft, ArrowUp, Loupe } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Triangle,
  title: 'Svg',
  decorators: [withKnobs],
};

const knobs = {
  name: (): string => select('Name', ['square', 'triangle', 'circle'], 'circle'),
  size: (): IconSize =>
    select('Size', ['nano', 'micro', 'small', 'normal', 'medium', 'big', 'biggest', 'huge', undefined], 'big'),
};

export const Icons: React.FC = () => (
  <>
    <H1>Svg Icons</H1>
    <Hr type="spacer" />
    <Hr size="nano" />
    <Hr type="spacer" size="big" />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        minHeight: '80px',
        gridGap: '20px',
        width: '200px',
        margin: '0 auto',
      }}
    >
      <Triangle size={knobs.size()} />
      <Square size={knobs.size()} />
      <Circle size={knobs.size()} />
      <Cross size={knobs.size()} />
      <ArrowRight size={knobs.size()} />
      <ArrowDown size={knobs.size()} />
      <ArrowLeft size={knobs.size()} />
      <ArrowUp size={knobs.size()} />
      <Check size={knobs.size()} />
      <Loupe size={knobs.size()} />
    </div>
  </>
);
