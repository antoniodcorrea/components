import React from 'react';
import { shallow } from 'enzyme';
import { SpinnerSquaredBrute } from '.';

describe('SpinnerSquaredBrute (Snapshot)', () => {
  it('SpinnerSquaredBrute renders properly', () => {
    const component = shallow(<SpinnerSquaredBrute />);
    expect(component).toMatchSnapshot();
  });
});

describe('SpinnerSquaredBrute', () => {
  it('SpinnerSquaredBrute is a myComponent type <div>', () => {
    const component = shallow(<SpinnerSquaredBrute />);
    expect(component.type()).toEqual('div');
  });
});
