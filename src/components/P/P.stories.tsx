import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import VerticalSpacer from '../VerticalSpacer/VerticalSpacer';
import P from './P';

export default {
  component: P,
  title: 'P',
  decorators: [withKnobs],
};

const knobs = {
  text: () =>
    text(
      'Text',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet'
    ),
  bold: () => boolean('Bold', false),
};

export const Default = () => {
  return (
    <>
      <P bold={knobs.bold()}>{knobs.text()}</P>
      <VerticalSpacer />
      <P size="small" bold={knobs.bold()}>
        {knobs.text()}
      </P>
      <VerticalSpacer />
      <P size="micro" bold={knobs.bold()}>
        {knobs.text()}
      </P>
      <VerticalSpacer />
      <P size="nano" bold={knobs.bold()}>
        {knobs.text()}
      </P>
    </>
  );
};
