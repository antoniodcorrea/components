import React from 'react';
import { Check, Cross } from '../Svg';
import './Switch.less';

interface Props {
  name?: string;
  label?: string;
  checked?: boolean;
  onChange?: (e) => void;
}

export const Switch: React.SFC<Props> = ({ name, checked, onChange }) => (
  <label className="Switch">
    <input className="Switch-input" type="checkbox" name={name} checked={checked} onChange={onChange} />
    <span className="Switch-slider " />
    <span className="Switch-icons">
      <span className="Switch-icon Switch-true">
        <Check />
      </span>
      <span className="Switch-icon Switch-false">
        <Cross />
      </span>
    </span>
  </label>
);
