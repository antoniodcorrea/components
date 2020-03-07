import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Button } from '../Button';
import { Cross } from '../Svg';
import { Loader } from '../Loader';
import { Span } from '../Span';
import { A } from '../A';
import './FileField.less';

type File = {
  originalName?: string;
  tempFile?: any;
};

interface Props {
  name?: string;
  label?: string;
  textButton?: string;
  className?: any;
  placeholder?: string;
  value?: any[] | File[];
  urlApi: string;
  readOnly?: any;
  onDrop?: (acceptedFiles: File[]) => void;
  grow?: boolean;
  // -  -  -  -  -  -  -  -  -  -  -  -  -
  // -  -  -  -  -  -  -  -  -  -  -  -  -
  type?: string;
  reverse?: boolean;
  error?: boolean;
  inline?: boolean;
  removable?: boolean;
  local?: boolean;
  onUpload?: any;
  onChange?: any;
  input?: any;
  disabled?: number;
  meta?: any;
  onClick?: any;
  accept?: any;
  originalName?: any;
  size?: string;
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
    const { input, onChange, onDrop, onUpload, urlApi } = this.props;
    console.log('-----------');
    console.log(acceptedFiles);
    console.log('-----------');

    if (!acceptedFiles.length) return;

    if (onDrop) onDrop(acceptedFiles);
    if (onChange) onChange(acceptedFiles);
    if (onUpload) onUpload(acceptedFiles);

    this.setState({
      isUploading: true,
      originalName: undefined,
    });

    let data = new FormData();
    data.append('files', acceptedFiles[0]);

    let config = {
      onUploadProgress: progressEvent => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);

        this.setState({
          percentCompleted,
        });
      },
    };

    axios
      .post(urlApi, data, config)
      .then(response => {
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
      })
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

    // console.log('- - - - - - - - - - - - - - - - - - - - ');
    // console.log('originalName: ', originalName);
    // console.log('input: ', input);
    // console.log('value: ', value);
    // console.log('input && input.value: ', input && input.value);
    // console.log('input && input.originalName: ', input && input.originalName);
    // console.log('- - - - - - - - - - - - - - - - - - - - ');

    // let _originalUrl =
    //   (input && input.value && (input.value.originalName || input.value)) ||
    //   (!input && value && (value.tempFile || value.originalName || value));

    // if (_originalUrl && local) {
    //   _originalUrl = _originalUrl.replace(/^.*\/\/[^\/]+/, '');
    // }

    // const _originalName = (
    //   originalName ||
    //   (input && input.value && (input.value.originalName || input.value)) ||
    //   (!input && value && (value.originalName || value)) ||
    //   ''
    // )
    //   .split('/')
    //   .pop();

    // const _originalExt = (_originalName && _originalName.split('.').pop()) || undefined;

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
          (reverse ? ' FileField--reverse' : '')
          //+ (_originalName ? ' FileField--uploaded' : '')
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
                // multiple
                multiple={false}
                accept={accept}
                onDrop={this.onDrop}
                onClick={onClick}
                onChange={onChange}
              />
            </div>
          </>
        )}
        {/* <>
          {_originalName && (
            <div className="FileField-original">
              <label className="FileField-label" htmlFor="">
                Uploaded file:
              </label>
              {input && input.value && !originalName && (
                <A href={_originalUrl} targetBlank data-extension={_originalExt}>
                  {_originalName}
                </A>
              )}
              {!input && value && !originalName && (
                <A href={_originalUrl} targetBlank data-extension={_originalExt}>
                  {_originalName}
                </A>
              )}
              {originalName && _originalName && <span data-extension={_originalExt}>{_originalName}</span>}
            </div>
          )}
          {removable && _originalName && <Cross className="FileField-remove" onClick={this.handleRemove} />}
        </> */}
      </div>
    );
  }
}
