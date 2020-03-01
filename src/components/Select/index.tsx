import React from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { components } from 'react-select';
import { data } from './data';
import { Cross, ArrowDown } from '../Svg';
import './Select.less';

interface Props {
  label: string;
  value?: any;
  grow?: boolean;
  limit?: number;
  onChange?: (e) => void;
}

export const Select: React.FC<Props> = ({ value, grow, onChange, limit, label }) => {
  const updateItems = newValues => {
    const updateValues = !newValues || newValues.length <= limit;
    const updatedValues = updateValues ? newValues : value;

    onChange(updatedValues);
  };

  const filterValues = (inputValue: string) => {
    return data.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
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

  const Control = props => (
    <>
      <components.Control {...props} />
      <label className={'Select__label ' + (value ? 'Select__label--active' : '')}>{label}</label>
    </>
  );

  const MultiValueRemove = props => {
    return (
      <components.MultiValueRemove {...props}>
        <Cross size="micro" />
      </components.MultiValueRemove>
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterValues(inputValue));
      }, 200);
    });

  return (
    <div className={'Select ' + (grow ? 'Select--grow' : '')}>
      <AsyncCreatableSelect
        placeholder=" "
        classNamePrefix={'Select'}
        className={'Select__container'}
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        value={value}
        isClearable={false}
        onChange={updateItems}
        components={{
          MultiValueRemove,
          DropdownIndicator,
          LoadingMessage,
          NoOptionsMessage,
          Menu,
          Control,
        }}
      />
    </div>
  );
};
