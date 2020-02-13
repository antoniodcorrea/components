import React from 'react';
import P from './P';

export default {
  component: P,
  title: 'P',
};

const defaultProps = {};

export const Default = () => {
  return (
    <P {...defaultProps}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores
      quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id
      atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet?{' '}
    </P>
  );
};

export const Small = () => {
  return (
    <P {...defaultProps} size="small">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores
      quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id
      atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet?{' '}
    </P>
  );
};

export const Micro = () => {
  return (
    <P {...defaultProps} size="micro">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores
      quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id
      atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet?{' '}
    </P>
  );
};

export const Nano = () => {
  return (
    <P {...defaultProps} size="nano">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores
      quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id
      atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet?{' '}
    </P>
  );
};
