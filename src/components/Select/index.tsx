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

export const Select: React.FC<Props> = ({
  value,
  grow,
  onChange,
  limit,
  label,
  apiUrl,
  token,
  optionFilterFieldName,
}) => {
  const updateItems = newValues => {
    const updateValues = !newValues || newValues.length <= limit;
    const updatedValues = updateValues ? newValues : value;

    onChange(updatedValues);
  };

  const Menu = props => {
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

  const NoOptionsMessage = () => <></>;

  const LoadingMessage = () => <></>;

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDown size="small" />
      </components.DropdownIndicator>
    );
  };

  /* README */
  const SelectContainer = ({ children, ...props }) => (
    <components.SelectContainer {...props}>
      {children}
      <label className={'Select__label ' + (value ? 'Select__label--active' : '')}>{label}</label>
    </components.SelectContainer>
  );
  /* END */

  const MultiValueRemove = props => {
    return (
      <components.MultiValueRemove {...props}>
        <Cross size="micro" />
      </components.MultiValueRemove>
    );
  };

  const loadOptions = inputValue => {
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
        onChange={updateItems}
        components={{
          MultiValueRemove,
          DropdownIndicator,
          LoadingMessage,
          NoOptionsMessage,
          Menu,
          SelectContainer,
        }}
      />
    </div>
  );
};
