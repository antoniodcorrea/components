import React from 'react';
import { shallow } from 'enzyme';
import LoaderBrute from './LoaderBrute';

describe('LoaderBrute (Snapshot)', () => {
  it('LoaderBrute renders properly', () => {
    const component = shallow(<LoaderBrute />);
    expect(component).toMatchSnapshot();
  });
});

describe('LoaderBrute', () => {
  it('LoaderBrute is a myComponent type <div>', () => {
    const component = shallow(<LoaderBrute />);
    expect(component.type()).toEqual('div');
  });
});
