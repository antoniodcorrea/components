import React, { Component } from 'react';
import DatePickerComponent from 'react-datepicker';
import uniqueId from 'lodash/uniqueId';
import { Input } from '../Input';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.less';

interface Props {
  name: string;
  label: string;
  value: any;
  input?: any;
  locale?: string;
  disabled?: boolean;
  inline?: boolean;
  showTimeSelect?: boolean;
  minDate?: Date;
  maxDate?: Date;
  onChange: (date) => any;
}

export class DatePicker extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder,
      dateTime: props.value,
    };
  }

  render() {
    const {
      value = new Date(),
      label,
      locale = 'en',
      onChange,
      showTimeSelect,
      minDate,
      maxDate,
      disabled,
      inline,
      name,
    } = this.props;
    const id = uniqueId();
    const formattedValue = value instanceof Date ? value.toISOString().split('T')[0] : undefined;
    const CustomInput = (
      <div>
        <Input
          name={name}
          label={label}
          type="date"
          value={formattedValue}
          onChange={e => onChange(e.target.value)}
          readOnly
        />
      </div>
    );

    return (
      <div className="DatePicker">
        <DatePickerComponent
          placeholderText=" "
          className="DatePicker-input"
          calendarClassName="DatePicker-calendar"
          disabled={disabled}
          showPopperArrow={false}
          selected={value}
          onChange={onChange}
          showTimeSelect={showTimeSelect}
          locale={locale}
          dateFormat="MM/dd/yyyy h:mm aa"
          timeFormat=""
          timeIntervals={30}
          minDate={minDate}
          maxDate={maxDate}
          id={'DatePicker-' + id}
          inline={inline}
          customInput={CustomInput}
        />

        {/* {meta.touched && meta.error && <div className="DatePicker-error">{meta.error}</div>} */}
      </div>
    );
  }
}
