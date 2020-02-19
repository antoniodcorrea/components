import React from 'react';
import { shallow } from 'enzyme';
import { LoaderSquaredSmooth } from '.';

describe('LoaderSquaredSmooth (Snapshot)', () => {
  it('LoaderSquaredSmooth renders properly', () => {
    const component = shallow(<LoaderSquaredSmooth />);
    expect(component).toMatchSnapshot();
  });
});

describe('LoaderSquaredSmooth', () => {
  it('LoaderSquaredSmooth is a myComponent type <div>', () => {
    const component = shallow(<LoaderSquaredSmooth />);
    expect(component.type()).toEqual('div');
  });
});
