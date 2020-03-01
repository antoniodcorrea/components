import React from 'react';
import uniqueId from 'lodash/uniqueId';
import './Range.less';
import { Span } from '../Span';

interface Props {
  name: string;
  value?: string | number;
  label?: string;
  min?: number;
  max?: number;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  grow?: boolean;
  onChange: (e) => void;
}

export const Range: React.FC<Props> = ({ name, value, label, min, max, error, success, disabled, grow, onChange }) => {
  const id = uniqueId();

  return (
    <div
      className={
        'Range' +
        (error ? ' Range--error' : '') +
        (success ? ' Range--success' : '') +
        (disabled ? ' Range--disabled' : '') +
        (grow ? ' Range--grow' : '')
      }
    >
      {label && (
        <label className="Range-label" htmlFor={'Range-' + id}>
          <Span bold> {label}</Span>
        </label>
      )}
      <div className="Range-fields">
        <div className="Range-value">{value || 0}</div>
        <input
          name={name}
          className="Range-input"
          type="range"
          min={min}
          disabled={disabled}
          max={max}
          value={value}
          onChange={onChange}
          id={'Range-' + id}
        />
      </div>
    </div>
  );
};
