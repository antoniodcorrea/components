import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette';

const defaultProps = {
  totalItems: 837246,
  itemsPerPage: 8,
  page: 387,
  path: 'http://example.com',
};

describe('Palette (Snapshot)', () => {
  it('Palette renders properly', () => {
    const component = shallow(<Palette {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Palette', () => {
  it('Palette is a myComponent type <div>', () => {
    const component = shallow(<Palette {...defaultProps} />);
    expect(component.type()).toEqual('div');
  });
});
