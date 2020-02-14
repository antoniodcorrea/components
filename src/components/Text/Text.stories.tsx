import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import VerticalSpacer from '../VerticalSpacer/VerticalSpacer';
import P from '../P/P';
import Text from './Text';

export default {
  component: Text,
  title: 'Text',
  decorators: [withKnobs],
};

const knobs = {
  text: () =>
    text(
      'Text',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aut tempore enim cum cupiditate nihil dolores quo aperiam sit id atque, vel eius? Ab doloribus dolore earum laboriosam incidunt eveniet'
    ),
  bold: () => boolean('Bold', false),
  disabled: () => boolean('Disabled', false),
};

export const Default = () => {
  return (
    <>
      <P>
        <Text bold={knobs.bold()} disabled={knobs.disabled()}>
          {knobs.text()}
        </Text>
      </P>
      <P>
        <Text size="small" bold={knobs.bold()} disabled={knobs.disabled()}>
          {knobs.text()}
        </Text>
      </P>
      <P>
        <Text size="micro" bold={knobs.bold()} disabled={knobs.disabled()}>
          {knobs.text()}
        </Text>
      </P>
      <P>
        <Text size="nano" bold={knobs.bold()} disabled={knobs.disabled()}>
          {knobs.text()}
        </Text>
      </P>
    </>
  );
};
