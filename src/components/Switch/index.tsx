import React, { HTMLProps } from 'react';

import Check from '../../assets/svg/check.svg';
import Cross from '../../assets/svg/cross.svg';

import './Switch.less';

interface Props extends HTMLProps<HTMLInputElement> {
  name: string;
  className?: string;
  checked: boolean;
}

export const Switch: React.FC<Props> = ({ name, checked = false, className, ...props }) => (
  <label className={'Switch' + (!className ? ` ${className}` : '')}>
    <input
      type="checkbox"
      name={name}
      /*defaultChecked={checked} This may be needed*/
      checked={!!checked}
      {...props}
    />
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
