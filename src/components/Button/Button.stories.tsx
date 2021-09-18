import React from 'react';
import { boolean, select, withKnobs, text } from '@storybook/addon-knobs';

import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

const knobs = {
  arrow: (): boolean => boolean('Arrow', false),
  loading: (): boolean => boolean('Loading', false),
  error: (): boolean => boolean('Error', false),
  success: (): boolean => boolean('Success', false),
  disabled: (): boolean => boolean('Disabled', false),
  size: (): 'small' | 'normal' => select('Size', [undefined, 'small', 'normal'], undefined),
};

export const Default: React.FC = () => (
  <div style={{ display: 'grid', gap: '10px 10px', gridTemplateColumns: '1fr 1fr', alignItems: 'flex-end' }}>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow success />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow success size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow disabled />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow disabled size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow error />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow error size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow loading />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow loading size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow arrow />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" grow arrow size="small" />
    </div>

    <Button
      text="Click me!"
      grow
      arrow={knobs.arrow()}
      size={knobs.size()}
      disabled={knobs.disabled()}
      error={knobs.error()}
      success={knobs.success()}
      loading={knobs.loading()}
    />
  </div>
);
