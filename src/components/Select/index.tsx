import React from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { components } from 'react-select';
import axios from 'axios';
import { Cross, ArrowDown } from '../Svg';
import './Select.less';

interface Props {
  label: string;
  value?: any;
  grow?: boolean;
  limit?: number;
  apiUrl?: string;
  token?: string;
  optionFilterFieldName?: string;

  onChange?: (e) => void;
}

export class Select extends React.Component<Props> {
  loadOptions = inputValue => {
    const { optionFilterFieldName, apiUrl, token } = this.props;
    return axios({
      method: 'get',
      url:
        apiUrl +
        (optionFilterFieldName ? '/' + optionFilterFieldName + '/?' + optionFilterFieldName + '=' + inputValue : ''),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        response.data.map(item => {
          item.label = item.name;
          item.value = item.name;
        });

        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateItems = newValues => {
    const { onChange, limit, value } = this.props;
    const updateValues = !newValues || newValues.length <= limit;
    const updatedValues = updateValues ? newValues : value;

    onChange(updatedValues);
  };

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

  NoOptionsMessage = () => <></>;

  LoadingMessage = () => <></>;

  DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDown size="small" />
      </components.DropdownIndicator>
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

  MultiValueRemove = props => {
    return (
      <components.MultiValueRemove {...props}>
        <Cross size="micro" />
      </components.MultiValueRemove>
    );
  };

  render = () => {
    const { grow, value } = this.props;
    return (
      <div className={'Select ' + (grow ? 'Select--grow' : '')}>
        <AsyncCreatableSelect
          placeholder=" "
          classNamePrefix={'Select'}
          className={'Select__container'}
          isMulti
          cacheOptions
          defaultOptions
          loadOptions={this.loadOptions}
          value={value}
          isClearable={false}
          onChange={this.updateItems}
          components={{
            MultiValueRemove: this.MultiValueRemove,
            DropdownIndicator: this.DropdownIndicator,
            LoadingMessage: this.LoadingMessage,
            NoOptionsMessage: this.NoOptionsMessage,
            Menu: this.Menu,
            SelectContainer: this.SelectContainer,
          }}
        />
      </div>
    );
  };
}
