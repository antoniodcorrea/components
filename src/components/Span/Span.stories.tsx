import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import P from '../P/P';
import Span from './Span';

export default {
  component: Span,
  title: 'Span',
  decorators: [withKnobs],
};

const knobs = {
  text: () =>
    text(
      'Span',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet'
    ),
  bold: () => boolean('Bold', false),
  disabled: () => boolean('Disabled', false),
};

export const Normal = () => {
  return (
    <Span bold={knobs.bold()} disabled={knobs.disabled()}>
      {knobs.text()}
    </Span>
  );
};

export const Small = () => {
  return (
    <Span size="small" bold={knobs.bold()} disabled={knobs.disabled()}>
      {knobs.text()}
    </Span>
  );
};

export const Micro = () => {
  return (
    <Span size="micro" bold={knobs.bold()} disabled={knobs.disabled()}>
      {knobs.text()}
    </Span>
  );
};

export const Nano = () => {
  return (
    <Span size="nano" bold={knobs.bold()} disabled={knobs.disabled()}>
      {knobs.text()}
    </Span>
  );
};
