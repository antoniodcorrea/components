import React, { useState } from 'react';

import { Select as SelectUi } from './Select';

export type Value = {
  value: string | number;
  label: string;
};

interface Props {
  placeholder?: string;
  label?: string;
  options: Value[];
  value: Value[];
  defaultOptions: Value[];
  grow?: boolean;
  maxItems?: number;
  onChange?: (params: Value[]) => void;
  onInputChange?: (params: unknown) => void;
}

export const Select: React.FC<Props> = ({
  placeholder,
  label,
  options,
  value,
  defaultOptions,
  onInputChange,
  grow,
  onChange,
  maxItems,
}) => {
  const [focus, setFocus] = useState(false);
  const focusOrContent = !!value?.length || focus;

  const onValueChange = (values) => {
    onChange(values);
  };

  return (
    <SelectUi
      placeholder={placeholder}
      label={label}
      focusOrContent={focusOrContent}
      options={options}
      value={value}
      defaultOptions={defaultOptions}
      onInputChange={onInputChange}
      onChange={onValueChange}
      grow={grow}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      maxItems={maxItems}
    />
  );
};
