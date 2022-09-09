import React from 'react';
import { boolean, select, withKnobs, text } from '@storybook/addon-knobs';

import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

const knobs = {
  grow: (): boolean => boolean('Grow', false),
  arrow: (): boolean => boolean('Arrow', false),
  loading: (): boolean => boolean('Loading', false),
  error: (): boolean => boolean('Error', false),
  success: (): boolean => boolean('Success', false),
  disabled: (): boolean => boolean('Disabled', false),
  size: (): undefined | 'small' | 'normal' | 'tiny' =>
    select('Size', [undefined, 'small', 'normal', 'tiny'], undefined),
  type: (): 'submit' | 'reset' | 'button' => select('Type', ['submit', 'reset', 'button'], 'reset'),
};

export const Default: React.FC = () => (
  <div style={{ display: 'grid', gap: '10px 20px', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'flex-end' }}>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" size="tiny" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" success />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" success size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" success size="tiny" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" disabled />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" disabled size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" disabled size="tiny" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" error />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" error size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" error size="tiny" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" loading />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" loading size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" loading size="tiny" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" arrow />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" arrow size="small" />
    </div>
    <div style={{ width: '200px', outline: '2px solid rgba(255, 0, 255, .0)' }}>
      <Button text="Click me!" arrow size="tiny" />
    </div>

    <div>
      <Button
        text="Click me!"
        grow={knobs.grow()}
        type={knobs.type()}
        arrow={knobs.arrow()}
        size={knobs.size()}
        disabled={knobs.disabled()}
        error={knobs.error()}
        success={knobs.success()}
        loading={knobs.loading()}
      />
    </div>
  </div>
);
