import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader (Snapshot)', () => {
  it('Loader renders properly', () => {
    const component = shallow(<Loader />);
    expect(component).toMatchSnapshot();
  });
});

describe('Loader', () => {
  it('Loader is a myComponent type <div>', () => {
    const component = shallow(<Loader />);
    expect(component.type()).toEqual('div');
  });
});
