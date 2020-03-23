import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Layout, LayoutHorizontal, LayoutVertical } from '.';

export default {
  component: Layout,
  title: 'Layout',
  decorators: [withKnobs],
};

const knobs = {
  type1: (): LayoutHorizontal =>
    select('Horizontal wrapper', [undefined, 'center', 'left', 'right', 'even', 'around', 'between'], 'around'),
  type2: (): LayoutVertical => select('vertical wrapper', [undefined, 'center', 'top', 'bottom'], 'center'),
  type3: (): LayoutHorizontal =>
    select('Horizontal children', [undefined, 'center', 'left', 'right', 'even', 'around', 'between'], 'around'),
  type4: (): LayoutVertical => select('vertical children', [undefined, 'center', 'top', 'bottom'], 'center'),
};

export const Default: React.FC = () => (
  <div style={{ width: '300px', height: '200px', background: 'black', padding: '5px' }}>
    <Layout horizontal={knobs.type1()} vertical={knobs.type2()}>
      <div style={{ width: '200px', height: '150px', background: 'white', padding: '5px' }}>
        <Layout horizontal={knobs.type3()} vertical={knobs.type4()}>
          <div style={{ width: '20px', height: '20px', background: 'black' }} />
          <div style={{ width: '20px', height: '20px', background: 'black' }} />
          <div style={{ width: '20px', height: '20px', background: 'black' }} />
        </Layout>
      </div>
    </Layout>
  </div>
);
