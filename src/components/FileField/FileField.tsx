import React from 'react';
import Dropzone from 'react-dropzone';

import { A } from '../A';
import { Hr } from '../Hr';
import { Loader } from '../Loader';
import { Span } from '../Span';
import { Input } from '../Input';
import { Cross, Upload, Eye } from '../Svg';

import './FileField.less';

export interface Props {
  name?: string;
  label?: string;
  fileUrl?: string;
  buttonText?: string;
  className?: string;
  grow?: boolean;
  maxSize: number;
  percentCompleted?: number;
  removable?: boolean;
  accept?: string;
  size?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  buttonTextToRender: string;
  filenameOrUrl: string;
  onDropAccepted: (acceptedFiles: File[]) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileRemove: (e: React.MouseEvent) => void;
  onFileNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileField: React.FC<Props> = ({
  className,
  fileUrl,
  grow,
  label,
  name,
  accept,
  removable = true,
  maxSize,
  percentCompleted,
  error,
  success,
  disabled,
  buttonTextToRender,
  filenameOrUrl,
  onDropAccepted,
  onChange,
  onFileRemove,
  onFileNameChange,
  onInputBlur,
}) => {
  const loading = percentCompleted > 0 && percentCompleted < 100;

  return (
    <div
      className={
        'FileField ' +
        (className ? className : '') +
        (grow ? ' FileField--grow' : '') +
        (removable ? ' FileField--removable' : '') +
        (fileUrl ? ' FileField--uploaded' : '') +
        (error ? ' FileField--error' : '') +
        (success ? ' FileField--success' : '') +
        (disabled ? ' FileField--disabled' : '')
      }
    >
      {label && (
        <>
          <label className="FileField-label">
            <Span weight="semiBold">{label}</Span>
          </label>
          <Hr spacer size="micro" />
        </>
      )}
      <Dropzone
        multiple={false}
        accept={accept}
        maxSize={maxSize}
        onDropAccepted={onDropAccepted}
        disabled={disabled || loading}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="FileField-dropzone">
            <input {...getInputProps()} onChange={onChange} name={name} type="file" />
            <Upload className="FileField-textIcon" size="small" />
            <Span weight="semiBold" uppercase>
              {buttonTextToRender}
            </Span>
            <div className={'FileField-progress ' + (percentCompleted > 0 ? 'FileField--loading' : '')}>
              <Loader loaded={percentCompleted} grow />
            </div>
          </div>
        )}
      </Dropzone>
      {fileUrl && (
        <div className="FileField-file">
          <Input
            className="FileField-name"
            name=""
            type="text"
            onChange={onFileNameChange}
            onBlur={onInputBlur}
            value={filenameOrUrl}
            error={false}
            grow
          />
          {fileUrl && (
            <A className="FileField-icon" href={fileUrl} title={fileUrl} styled={false} targetBlank>
              <Eye className="FileField-open" />
            </A>
          )}
          {removable && fileUrl && (
            <div className="FileField-icon">
              <Cross className="FileField-remove" onClick={onFileRemove} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
