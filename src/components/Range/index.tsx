import React from 'react';
import uniqueId from 'lodash/uniqueId';
import { Span } from '../Span';
import './Range.less';
import { Hr } from '../Hr';
import { Check } from '../Svg';

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
  const valueInitial: number = max / 2;
  let valueToDisplay: number | React.ReactNode;
  if (!value) {
    valueToDisplay = Math.floor(valueInitial);
  } else if (value == max) {
    valueToDisplay = <Check />;
  } else {
    valueToDisplay = value;
  }

  return (
    <div
      className={
        'Range' +
        (error ? ' Range--error' : '') +
        (success ? ' Range--success' : '') +
        (disabled ? ' Range--disabled' : '') +
        (grow ? ' Range--grow' : '') +
        (value == max ? ' Range--max' : '')
      }
    >
      {label && (
        <>
          <label className="Range-label" htmlFor={'Range-' + id}>
            <Span bold> {label}</Span>
          </label>
          <Hr type="spacer" size="micro" />
        </>
      )}
      <div className="Range-fields">
        <div className="Range-value">{valueToDisplay}</div>
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
