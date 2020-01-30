import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

const defaultProps = {
  totalItems: 837246,
  itemsPerPage: 8,
  page: 387,
  path: 'http://example.com',
};

describe('Pagination (Snapshot)', () => {
  it('Pagination renders properly', () => {
    const component = shallow(<Pagination {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Pagination', () => {
  it('Pagination is a myComponent type <div>', () => {
    const component = shallow(<Pagination {...defaultProps} />);
    expect(component.type()).toEqual('div');
  });
});
