import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const defaultProps = {};

describe('Button (Snapshot)', () => {
  it('Button renders properly', () => {
    const component = shallow(<Button {...defaultProps}>Test</Button>);
    expect(component).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('Button is a myComponent type <div>', () => {
    const component = shallow(<Button {...defaultProps}>Test</Button>);
    expect(component.type()).toEqual('div');
  });
});
