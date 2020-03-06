import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Button } from '../Button';
import { Cross } from '../Svg';
import { Loader } from '../Loader';
import { Span } from '../Span';
import './FileField.less';

interface Props {
  name?: string;
  type?: string;
  reverse?: boolean;
  label?: string;
  textButton?: string;
  placeholder?: string;
  size?: string;
  value?: {
    originalName?: string;
    tempFile?: any;
  };
  error?: boolean;
  grow?: boolean;
  inline?: boolean;
  removable?: boolean;
  local?: boolean;
  onUpload?: any;
  onDrop?: any;
  onChange?: any;
  input?: any;
  disabled?: number;
  meta?: any;
  onClick?: any;
  className?: any;
  accept?: any;
  readOnly?: any;
  originalName?: any;
}

interface State {
  originalName?: any;
  percentCompleted?: number;
  isUploading: boolean;
  tempFile: any;
}

export class FileField extends Component<Props, State> {
  private dropzoneRef;
  constructor(props) {
    super(props);

    this.state = {
      originalName: undefined,
      percentCompleted: 0,
      isUploading: false,
      tempFile: undefined,
    };
  }

  onDrop = acceptedFiles => {
    const { input, onChange, onDrop, onUpload } = this.props;

    if (onDrop) {
      onDrop(acceptedFiles);
    }

    this.setState({ isUploading: true, originalName: undefined });

    let data = new FormData();

    data.append('file', acceptedFiles[0]);

    let config = {
      onUploadProgress: function(progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        this.setState({ percentCompleted });
      }.bind(this),
    };

    axios
      .post('/control/api/upload_temp_file/', data, config)
      .then(
        function(response) {
          this.setState({
            originalName: response.data.originalName,
            percentCompleted: 0,
            isUploading: false,
          });
          const res = {
            originalName: response.data.originalName,
            tempFile: response.data.url,
            tempFileId: response.data.id,
          };

          if (input) {
            input.onChange(res);
          }

          if (onChange) {
            onChange(res);
          }

          if (onUpload) {
            onUpload(res);
          }
        }.bind(this)
      )
      .catch(function(error) {}.bind(this));
  };

  onClick = e => {
    e.preventDefault();

    this.dropzoneRef.open();
  };

  handleRemove = () => {
    const { input, onChange /* , onDrop, onUpload */ } = this.props;
    alert(1);
    const res = {
      originalName: null,
      percentCompleted: 0,
      tempFile: undefined,
    };

    this.setState(res);

    if (input) {
      input.onChange(null);
    }

    if (onChange) {
      onChange(null);
    }
  };

  render() {
    const {
      className,
      input,
      type,
      reverse,
      error,
      size,
      grow,
      inline,
      disabled,
      label,
      textButton,
      name,
      value,
      accept,
      onClick,
      onChange,
      readOnly,
      local,
      removable,
    } = this.props;

    const { percentCompleted, originalName } = this.state;

    let _originalUrl =
      (input && input.value && (input.value.originalName || input.value)) ||
      (!input && value && (value.tempFile || value.originalName || value));

    if (_originalUrl && local) {
      _originalUrl = _originalUrl.replace(/^.*\/\/[^\/]+/, '');
    }

    const _originalName = (
      originalName ||
      (input && input.value && (input.value.originalName || input.value)) ||
      (!input && value && (value.originalName || value)) ||
      ''
    )
      .split('/')
      .pop();

    const _originalExt = (_originalName && _originalName.split('.').pop()) || undefined;

    return (
      <div
        className={
          'FileField ' +
          (className ? className : '') +
          (size ? ' FileField--size-' + size : '') +
          (type ? ' FileField--' + type : '') +
          (error ? ' FileField--error' : '') +
          (grow ? ' FileField--grow' : '') +
          (readOnly ? ' FileField--readOnly' : '') +
          (inline ? ' FileField--inline' : '') +
          (removable ? ' FileField--removable' : '') +
          (disabled ? ' FileField--disabled' : '') +
          (reverse ? ' FileField--reverse' : '') +
          (_originalName ? ' FileField--uploaded' : '')
        }
      >
        {!readOnly && (
          <>
            {label && (
              <label className="FileField-label" htmlFor="">
                <Span bold>{label}</Span>
              </label>
            )}

            <div className="FileField-content">
              <Button text={textButton} />
              <div className={'FileField-progress ' + (percentCompleted > 0 ? 'FileField--loading' : '')}>
                <Loader loaded={percentCompleted} grow />
              </div>
              <Dropzone
                ref={node => (this.dropzoneRef = node)}
                className="FileField-dropzone"
                name={name}
                multiple={false}
                accept={accept}
                onDrop={this.onDrop}
                onClick={onClick}
                onChange={onChange}
              />
            </div>
          </>
        )}
        <>
          {_originalName && (
            <div className="FileField-original">
              <label className="FileField-label" htmlFor="">
                Uploaded file:
              </label>
              {input && input.value && !originalName && (
                <a href={_originalUrl} target="_blank" data-extension={_originalExt}>
                  {_originalName}
                </a>
              )}
              {!input && value && !originalName && (
                <a href={_originalUrl} target="_blank" data-extension={_originalExt}>
                  {_originalName}
                </a>
              )}
              {originalName && _originalName && <span data-extension={_originalExt}>{_originalName}</span>}
            </div>
          )}
          {removable && _originalName && <Cross className="FileField-remove" onClick={this.handleRemove} />}
        </>
      </div>
    );
  }
}
