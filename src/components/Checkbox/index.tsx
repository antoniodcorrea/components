import React from 'react';
import uniqueId from 'lodash/uniqueId';
import './Checkbox.less';
import { Check } from '../Svg';

interface Props {
  id?: any;
  input?: any;
  value?: boolean;
  className?: string;
  label?: string;
  onChange?: (e) => void;
}

export const Checkbox: React.FC<Props> = ({ input, value, className, label, onChange }) => {
  const id = uniqueId();

  return (
    <div className={'Checkbox' + (className ? ' Checkbox--' + className : '')}>
      <input
        className="Checkbox-input"
        id={'Checkbox-' + id}
        type="checkbox"
        onChange={onChange}
        checked={(input && input.value) || value}
      />
      <span className="Checkbox-helper">
        <Check />
      </span>
      <label className="Checkbox-label" htmlFor={'Checkbox-' + id}>
        {label}
      </label>
    </div>
  );
};
