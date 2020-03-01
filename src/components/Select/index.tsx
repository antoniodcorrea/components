import React from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { components } from 'react-select';
import { colourOptions } from './data';
import { Cross, ArrowDown } from '../Svg';
import './Select.less';

const filterColors = (inputValue: string) => {
  return colourOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
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
      resolve(filterColors(inputValue));
    }, 200);
  });

interface Props {
  grow?: boolean;
  value?: any;
  onChange?: (e) => void;
}

export const Select: React.FC<Props> = ({ value, grow, onChange }) => (
  <div className={'Select ' + (grow ? 'Select--grow' : '')}>
    <AsyncCreatableSelect
      classNamePrefix={'Select'}
      isMulti
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
      value={value}
      isClearable={false}
      onChange={onChange}
      components={{
        MultiValueRemove,
        DropdownIndicator,
        LoadingMessage,
        NoOptionsMessage,
      }}
    />
  </div>
);
