import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Border } from '.';
import { Span } from '../Span';

export default {
  component: Border,
  title: 'Border',
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <div style={{ width: '300px', height: '400px' }}>
      <Border>
        <Span bold>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit consequuntur aliquid ipsum at
          quaerat exercitationem incidunt pariatur. Aperiam, fuga? Natus recusandae, eveniet consectetur facilis totam
          distinctio quo aliquam earum!
        </Span>
      </Border>
    </div>
  );
};
