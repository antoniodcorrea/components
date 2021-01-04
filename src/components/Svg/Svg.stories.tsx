import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import {
  IconSize,
  Triangle,
  Circle,
  Square,
  Check,
  Cross,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Loupe,
  User,
  Private,
  Bookmark,
} from '.';
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
  filled: (): boolean => boolean('filled', false),
};

export const Icons: React.FC = () => (
  <>
    <H1>Svg Icons</H1>
    <Hr spacer />
    <Hr size="nano" />
    <Hr spacer size="big" />
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
      <Triangle size={knobs.size()} filled={knobs.filled()} />
      <Square size={knobs.size()} filled={knobs.filled()} />
      <Circle size={knobs.size()} filled={knobs.filled()} />
      <Cross size={knobs.size()} filled={knobs.filled()} />
      <ArrowRight size={knobs.size()} filled={knobs.filled()} />
      <ArrowDown size={knobs.size()} filled={knobs.filled()} />
      <ArrowLeft size={knobs.size()} filled={knobs.filled()} />
      <ArrowUp size={knobs.size()} filled={knobs.filled()} />
      <Check size={knobs.size()} filled={knobs.filled()} />
      <Loupe size={knobs.size()} filled={knobs.filled()} />
      <User size={knobs.size()} filled={knobs.filled()} />
      <Private size={knobs.size()} filled={knobs.filled()} />
      <Bookmark size={knobs.size()} filled={knobs.filled()} />
    </div>
  </>
);
