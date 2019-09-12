import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import expect from 'expect';
import Loader from './Loader.tsx';
const defaultProps = {};
describe('Loader (Snapshot)', () => {
  it('Loader renders properly', () => {
    const component = renderer.create(React.createElement(Loader, Object.assign({}, defaultProps)));
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('Loader', () => {
  it('Loader is a myComponent type <div>', () => {
    const myComponent = shallow(React.createElement(Loader, Object.assign({}, defaultProps)));
    expect(myComponent.type()).toEqual('div');
  });
});
