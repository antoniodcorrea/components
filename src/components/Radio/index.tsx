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
  grow?: boolean;
  inline?: boolean;
  onChange?: (e) => void;
}

export const Radio: React.FC<Props> = ({ name, options, value, className, grow, onChange, inline }) => (
  <div
    className={
      'Radio' +
      (className ? ' Radio--' + className : '') +
      (grow ? ' Radio--grow' : '') +
      (inline ? ' Radio--inline' : '')
    }
    onChange={(e): void => onChange(e)}
  >
    {options.map((item) => (
      <React.Fragment key={item.value}>
        <div className="Radio-item">
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
      </React.Fragment>
    ))}
  </div>
);
