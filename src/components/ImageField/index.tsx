import React from 'react';
import Dropzone from 'react-dropzone';
import { Cross, Upload } from '../Svg';
import { Loader } from '../Loader';
import './ImageField.less';

export interface Props {
  name?: string;
  label?: string;
  url?: string;
  textButton?: string;
  className?: string;
  file?: string;
  grow?: boolean;
  percentCompleted?: number;
  removable?: boolean;
  accept?: any;
  size?: string;
  maxLength?: number;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  onDrop?: (acceptedFiles: File[]) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
}

export const ImageField: React.FC<Props> = ({
  className,
  url,
  grow,
  label,
  textButton,
  name,
  accept,
  removable = true,
  percentCompleted,
  error,
  success,
  disabled,
  onDrop,
  onChange,
  onRemove,
}) => {
  const fileName = url && url.split('/').pop();
  const hasImage = !!url;

  return (
    <div
      className={
        'ImageField ' +
        (className ? className : '') +
        (grow ? ' ImageField--grow' : '') +
        (removable ? ' ImageField--removable' : '') +
        (url ? ' ImageField--uploaded' : '') +
        (error ? ' ImageField--error' : '') +
        (success ? ' ImageField--success' : '') +
        (disabled ? ' ImageField--disabled' : '') +
        (hasImage ? ' ImageField--hasImage' : '')
      }
    >
      {hasImage && <img className="ImageField-image" src={url} alt={fileName} title={fileName} />}
      <div className={'ImageField-progress ' + (percentCompleted > 0 ? 'ImageField--loading' : '')}>
        <Loader loaded={percentCompleted} grow />
      </div>
      {hasImage && <div className={'ImageField-background'} />}
      {hasImage && (
        <div className="ImageField-icons">
          {removable && (
            <div className="ImageField-icon">
              <Cross onClick={onRemove} />
            </div>
          )}
          <Dropzone
            className="ImageField-icon"
            name={name}
            multiple={false}
            accept={accept}
            onDrop={onDrop}
            onChange={onChange}
            disabled={disabled}
          >
            <Upload />
          </Dropzone>
        </div>
      )}
      {!hasImage && (
        <Dropzone
          className="ImageField-dropzoneEmpty"
          name={name}
          multiple={false}
          accept={accept}
          onDrop={onDrop}
          onChange={onChange}
          disabled={disabled}
        >
          <Upload className="ImageField-iconEmpty" size="huge" />
        </Dropzone>
      )}
    </div>
  );
};
