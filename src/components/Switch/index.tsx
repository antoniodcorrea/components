import React from 'react';
import { Check, Cross } from '../Svg';

import './Switch.less';

interface Props {
  name: string;
  checked: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Switch: React.FC<Props> = ({ name, checked = false, onChange }) => (
  <label className="Switch">
    <input className="Switch-input" type="checkbox" name={name} defaultChecked={checked} onChange={onChange} />
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
