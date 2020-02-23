import React from 'react';
import './Radio.less';

interface Props {
  name?: string;
  options?: {
    value: string;
    label: string;
  }[];
  value?: string;
  className?: string;
  onChange?: (e) => void;
}

export const Radio: React.FC<Props> = ({ name, options, value, className, onChange }) => (
  <div className="Radio" onChange={e => onChange(e)}>
    {options.map(item => (
      <div className={'Radio-item' + (className ? ' Radio--' + className : '')} key={item.value}>
        <input
          className="Radio-input"
          id={item.value}
          type="radio"
          name={name}
          value={item.value}
          defaultChecked={value === item.value}
        />
        <span className="Radio-helper" />
        <label className="Radio-label" htmlFor={item.value}>
          {item.label}
        </label>
      </div>
    ))}
  </div>
);
