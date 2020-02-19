import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { P } from '.';

export default {
  component: P,
  title: 'P',
  decorators: [withKnobs],
};

const knobs = {
  text1: () =>
    text(
      'Text1',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet'
    ),
  text2: () =>
    text(
      'Text2',
      'Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. '
    ),
  text3: () =>
    text(
      'Text3',
      'Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet'
    ),
};

export const Default = () => {
  return (
    <>
      <P>{knobs.text1()}</P>
      <P>{knobs.text2()}</P>
      <P>{knobs.text3()}</P>
    </>
  );
};
