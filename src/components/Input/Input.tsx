import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import './Input.less';

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  inputType?: string;
  input?: any;
  isControlled?: any;
  className?: string;
  inline?: boolean;
  grow?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  isInvalid?: boolean;
  id?: string;
  disabled?: boolean;
  meta?: any;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (value: any) => {};
  onClick?: () => {};
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => {};
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => {};
}

interface State {
  placeholder?: string;
  id?: string;
}

class Input extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      placeholder: props.placeholder,
      id: '',
    };
  }

  static defaultProps = {
    inputType: 'text',
    type: 'default',
    label: 'Default label',
    placeholder: '',
    grow: false,
    isControlled: false,
    readOnly: false,
    inline: false,
    disabled: false,
    name: '',
    input: undefined, // clarify
    meta: undefined, // clarify
    children: undefined, // clarify
    value: undefined, // clarify
    className: undefined, // clarify
    loading: undefined, // clarify
    isInvalid: undefined, // clarify
    id: undefined, // clarify
    inputRef: undefined, // clarify
  };

  componentWillMount() {
    const id = uniqueId('Input-');
    this.setState({
      id: id,
    });
  }

  onFocus = e => {
    this.setState({
      placeholder: '',
    });

    // For touched state functionality in Redux Forms and React Final Form
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  onBlur = e => {
    this.setState({
      placeholder: this.props.placeholder,
    });

    // For touched state functionality in Redux Forms and React Final Form
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  onChange = e => {
    const value = e.target.value != '' ? e.target.value : null;

    const { onChange, input } = this.props;

    if (input) {
      input.onChange(value);
    } else if (onChange) {
      onChange(value);
    }
  };

  render() {
    const {
      type,
      isControlled,
      input,
      className,
      inline,
      grow,
      disabled,
      label,
      inputType,
      name,
      value,
      meta,
      readOnly,
      onClick,
      inputRef,
      loading,
      isInvalid,
      ...props
    } = this.props;
    let inputValue = value;
    if (input) {
      inputValue = input.value;
    }

    return (
      <div
        className={
          'Input' +
          (type ? ' Input--' + type : '') +
          ((meta && meta.touched && meta.error) || isInvalid ? ' Input--isInvalid' : '') +
          (grow ? ' Input--grow' : '') +
          (inline ? ' Input--inline' : '') +
          (disabled ? ' Input--disabled' : '') +
          (inputValue ? ' Input--withValue' : '')
        }
        onClick={onClick}
      >
        <input
          {...props}
          id={this.state.id}
          type={inputType}
          className="Input-input"
          value={inputValue}
          placeholder={this.state.placeholder}
          name={name}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          readOnly={readOnly}
          disabled={this.props.isControlled || disabled}
          ref={inputRef}
          onChange={this.onChange}
        />

        {label && (
          <label className="Input-label" htmlFor={this.state.id}>
            {label}
          </label>
        )}

        {meta && meta.touched && meta.error && <div className="Input-error">{meta.error}</div>}
      </div>
    );
  }
}
export default Input;
