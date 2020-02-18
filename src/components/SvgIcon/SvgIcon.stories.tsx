import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import SvgIcon from './SvgIcon';

export default {
  component: SvgIcon,
  title: 'SvgIcon',
  decorators: [withKnobs],
};

const knobs = {
  Svg: () =>
    select('Name', ['/square.svg#square', '/triangle.svg#triangle', '/circle.svg#circle'], '/circle.svg#circle'),
  Size: () =>
    select('Size', ['nano', 'micro', 'small', 'normal', 'medium', 'big', 'biggest', 'huge', undefined], undefined),
};

export const Default = () => <SvgIcon svg={knobs.Svg()} size={knobs.Size()} />;
