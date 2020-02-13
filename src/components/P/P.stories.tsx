import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
};

export const Default = () => {
  return (
    <>
      <P>{knobs.text()}</P>
      <hr />
      <P size="small">{knobs.text()}</P>
      <hr />
      <P size="micro">{knobs.text()}</P>
      <hr />
      <P size="nano">{knobs.text()}</P>
    </>
  );
};
