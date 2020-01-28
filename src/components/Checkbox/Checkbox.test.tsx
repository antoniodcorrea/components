import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const defaultProps = {
  id: '1',
  title: 'Test Checkbox',
  state: 'default',
  onArchiveTask: jest.fn(),
};

describe('Checkbox (Snapshot)', () => {
  it('Checkbox renders properly', () => {
    const component = shallow(<Checkbox {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Checkbox', () => {
  it('Checkbox is a myComponent type <div>', () => {
    const component = shallow(<Checkbox {...defaultProps} />);
    expect(component.type()).toEqual('div');
  });
});
