import React from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { components } from 'react-select';
import { Cross, ArrowDown } from '../Svg';
import { Value } from './types';

import './Select.less';

interface Props {
  label: string;
  value?: Value;
  grow?: boolean;
  limit?: number;
  onChange: any;
  loadOptions: any;
}

class SelectUi extends React.Component<Props> {
  Menu = props => {
    const { limit } = this.props;
    const optionSelectedLength = props.getValue().length || 0;
    const showOptions = !limit || optionSelectedLength < limit;

    return (
      <components.Menu {...props}>
        {showOptions ? (
          props.children
        ) : (
          <div className="Select__option Select__option--is-disabled">Max limit reached</div>
        )}
      </components.Menu>
    );
  };

  DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDown size="small" />
      </components.DropdownIndicator>
    );
  };

  MultiValueRemove = props => {
    return (
      <components.MultiValueRemove {...props}>
        <Cross size="micro" />
      </components.MultiValueRemove>
    );
  };

  SelectContainer = ({ children, ...props }) => {
    const { value, label } = this.props;

    return (
      <components.SelectContainer {...props}>
        {children}
        <label className={'Select__label ' + (value ? 'Select__label--active' : '')}>{label}</label>
      </components.SelectContainer>
    );
  };

  LoadingMessage = () => null;

  NoOptionsMessage = () => null;

  render = () => {
    const { grow, value, loadOptions, onChange } = this.props;

    return (
      <div className={'Select ' + (grow ? 'Select--grow' : '')}>
        <AsyncCreatableSelect
          placeholder=" "
          classNamePrefix={'Select'}
          className={'Select__container'}
          isMulti
          cacheOptions
          defaultOptions
          loadOptions={loadOptions}
          value={value}
          isClearable={false}
          onChange={onChange}
          components={{
            Menu: this.Menu,
            DropdownIndicator: this.DropdownIndicator,
            MultiValueRemove: this.MultiValueRemove,
            SelectContainer: this.SelectContainer,
            LoadingMessage: this.LoadingMessage,
            NoOptionsMessage: this.NoOptionsMessage,
          }}
        />
      </div>
    );
  };
}
export default SelectUi;
