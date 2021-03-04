import React from 'react';
import CreatableSelect, {
  components as Components,
  ContainerProps,
  IndicatorProps,
  MenuProps,
  MultiValueProps,
} from 'react-select';
import { ArrowDown, Cross } from '../Svg';

import { SelectValue } from '.';

import './Select.less';

interface Props {
  placeholder?: string;
  label?: string;
  focusOrContent: boolean;
  options: SelectValue[];
  value: SelectValue[];
  defaultOptions: SelectValue[];
  grow?: boolean;
  maxItems?: number;
  onChange?: (params: SelectValue[]) => void;
  onInputChange: (params: unknown) => void;
  onFocus: () => void;
  onBlur: () => void;
}

type MenyType = {
  selectProps: {
    maxItems: number;
  };
};

const Menu = ({ ...props }: MenyType & MenuProps<any, any>): JSX.Element => {
  const {
    selectProps: { maxItems },
  } = props;
  const showOptions = !maxItems || (props.getValue().length || 0) < maxItems;

  return (
    <Components.Menu {...props}>
      {showOptions ? (
        props.children
      ) : (
        <div className="Select__option Select__option--is-disabled">Max limit reached</div>
      )}
    </Components.Menu>
  );
};

const MultiValueRemove = (props: MultiValueProps<unknown>): JSX.Element => (
  <Components.MultiValueRemove {...props}>
    <Cross size="nano" />
  </Components.MultiValueRemove>
);

const SelectContainer = ({ children, ...props }: ContainerProps<any, any>): JSX.Element => (
  <Components.SelectContainer {...props}>{children}</Components.SelectContainer>
);

const DropdownIndicator = (props: IndicatorProps<any, any>): JSX.Element => (
  <Components.DropdownIndicator {...props}>
    <ArrowDown size="small" />
  </Components.DropdownIndicator>
);

const LoadingMessage = (): null => null;

const NoOptionsMessage = (): null => null;

export const Select: React.FC<Props> = ({
  options,
  value,
  defaultOptions,
  onInputChange,
  grow,
  onChange,
  placeholder,
  label,
  focusOrContent,
  onFocus,
  onBlur,
  maxItems,
}) => (
  <div className={'Select ' + (grow ? 'Select--grow' : '')}>
    <CreatableSelect
      className={'Select__container'}
      classNamePrefix={'Select'}
      closeMenuOnSelect
      value={value}
      isMulti
      placeholder={!label ? placeholder : ' '}
      cacheOptions
      defaultOptions={defaultOptions}
      options={options}
      onInputChange={onInputChange}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      maxItems={maxItems}
      components={{
        Menu: Menu,
        DropdownIndicator: DropdownIndicator,
        MultiValueRemove: MultiValueRemove,
        SelectContainer: SelectContainer,
        LoadingMessage: LoadingMessage,
        NoOptionsMessage: NoOptionsMessage,
      }}
    />
    {!placeholder && (
      <label className={'Select__label ' + (focusOrContent ? 'Select__label--active' : '')}>{label}</label>
    )}
  </div>
);
