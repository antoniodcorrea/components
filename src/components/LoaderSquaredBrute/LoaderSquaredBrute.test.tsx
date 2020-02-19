import React from 'react';
import { shallow } from 'enzyme';
import { LoaderSquaredBrute } from '.';

describe('LoaderSquaredBrute (Snapshot)', () => {
  it('LoaderSquaredBrute renders properly', () => {
    const component = shallow(<LoaderSquaredBrute />);
    expect(component).toMatchSnapshot();
  });
});

describe('LoaderSquaredBrute', () => {
  it('LoaderSquaredBrute is a myComponent type <div>', () => {
    const component = shallow(<LoaderSquaredBrute />);
    expect(component.type()).toEqual('div');
  });
});
