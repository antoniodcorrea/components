import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Triangle, Circle, Square, Check, Cross, SvgIcon } from '.';
import { H1 } from '../H1';
import { Hr } from '../Hr';

export default {
  component: Triangle,
  title: 'Svg',
  decorators: [withKnobs],
};

const knobs = {
  name: () => select('Name', ['square', 'triangle', 'circle'], 'circle'),
  size: () =>
    select('Size', ['nano', 'micro', 'small', 'normal', 'medium', 'big', 'biggest', 'huge', undefined], undefined),
};

export const Icons = () => (
  <>
    <H1>Svg Icons</H1>
    <Hr type="spacer" />
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', height: '80px', gridGap: '20px' }}>
      <SvgIcon name="Triangle" size={knobs.size()} />
      <Triangle size={knobs.size()} />
      <Square size={knobs.size()} />
      <Circle size={knobs.size()} />
      <Check size={knobs.size()} />
      <Cross size={knobs.size()} />
    </div>
  </>
);
