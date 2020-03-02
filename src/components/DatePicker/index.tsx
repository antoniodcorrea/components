import React, { Component } from 'react';
import DatePickerComponent from 'react-datepicker';
import { Input } from '../Input';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.less';

const MOMENT_DATE_FORMAT = 'YYYY-MM-DD';

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

interface State {
  inputValue: any;
  datePickerValue: any;
  focused: boolean;
}

export class DatePicker extends Component<Props, State> {
  private calendarRef;

  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();

    this.state = {
      inputValue: this.props.value,
      datePickerValue: this.props.value,
      focused: false,
    };
  }

  handleInputChange = event => {
    const { onChange } = this.props;
    let date = moment(event.target.value, MOMENT_DATE_FORMAT);
    this.setState({
      inputValue: event.target.value,
    });

    if (date.isValid()) {
      this.setState({
        datePickerValue: date.toDate(),
      });

      onChange(date.toDate());
    }
  };

  handleDatePickerChange = date => {
    const { onChange } = this.props;

    this.setState({
      datePickerValue: date,
      inputValue: moment(date).format(MOMENT_DATE_FORMAT),
    });
    onChange(date);
  };

  render() {
    const { value, label, locale = 'en', showTimeSelect, minDate, maxDate, disabled, inline, name } = this.props;

    let formattedDate = moment(this.state.inputValue, MOMENT_DATE_FORMAT);
    const isInputActive = formattedDate.isValid() || this.state.focused;

    return (
      <div className={'DatePicker ' + (inline ? 'DatePicker--inline' : '')}>
        {!inline && (
          <Input
            className="DatePicker-input"
            name={name}
            label={label}
            type={isInputActive ? 'date' : 'input'}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            grow
            onFocus={() => {
              this.calendarRef.current.setOpen(true);
              this.setState({
                focused: true,
              });
            }}
            onClick={() => {
              this.calendarRef.current.setOpen(true);
              this.setState({
                focused: true,
              });
            }}
            onBlur={() => {
              this.setState({
                focused: false,
              });
            }}
            onKeyPress={() => {
              this.calendarRef.current.setOpen(false);
            }}
          />
        )}
        <DatePickerComponent
          ref={this.calendarRef}
          placeholderText=" "
          className="DatePicker-input"
          calendarClassName="DatePicker-calendar"
          popperClassName="DatePicker-popper"
          disabled={disabled}
          showPopperArrow={false}
          selected={value}
          onChange={this.handleDatePickerChange}
          showTimeSelect={showTimeSelect}
          locale={locale}
          dateFormat="MM/dd/yyyy"
          timeFormat=""
          timeIntervals={30}
          minDate={minDate}
          maxDate={maxDate}
          inline={inline}
        />

        {/* {meta.touched && meta.error && <div className="DatePicker-error">{meta.error}</div>} */}
      </div>
    );
  }
}
