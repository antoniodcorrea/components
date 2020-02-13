import React from 'react';
import { action } from '@storybook/addon-actions';
import A from './A';

export default {
  component: A,
  title: 'A',
};

const defaultProps = {
  href: 'http://example.com',
  onClick: action('button-click'),
  targetBlank: true,
};

export const Default = () => {
  return <A {...defaultProps}>Click me!</A>;
};

export const Styled = () => {
  return (
    <A {...defaultProps} styled>
      Click me!
    </A>
  );
};
