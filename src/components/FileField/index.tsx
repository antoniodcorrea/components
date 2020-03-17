import React from 'react';
import Dropzone from 'react-dropzone';
import { Cross, Upload } from '../Svg';
import { Loader } from '../Loader';
import { Span } from '../Span';
import { Hr } from '../Hr';
import { A } from '../A';
import './FileField.less';

interface Props {
  name?: string;
  label?: string;
  url?: string;
  textButton?: string;
  className?: any;
  file?: string;
  grow?: boolean;
  percentCompleted?: number;
  removable?: boolean;
  accept?: any;
  size?: string;
  maxLength?: number;
  onDrop?: (acceptedFiles: File[]) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
}

export const FileField: React.FC<Props> = ({
  className,
  url,
  grow,
  label,
  textButton,
  name,
  accept,
  removable = true,
  percentCompleted,
  maxLength,
  onDrop,
  onChange,
  onRemove,
}) => {
  const textButtonToRender = textButton ? textButton : 'Upload file';
  const file = url && url.split('/').pop();
  const fileName = file && file.split('.').shift();
  const extension = url && url.split('.').pop();
  const shouldBeShortened = !maxLength || fileName.length <= maxLength;
  const truncatedFilename = shouldBeShortened ? file : fileName.substring(0, maxLength) + '[...].' + extension;

  return (
    <div
      className={
        'FileField ' +
        (className ? className : '') +
        (grow ? ' FileField--grow' : '') +
        (removable ? ' FileField--removable' : '') +
        (url ? ' FileField--uploaded' : '')
      }
    >
      {label && (
        <label className="FileField-label">
          <Span bold>{label}</Span>
        </label>
      )}
      <Hr type="spacer" size="micro" />
      <Dropzone
        className="FileField-dropzone"
        name={name}
        multiple={false}
        accept={accept}
        onDrop={onDrop}
        onChange={onChange}
      >
        <Upload className="FileField-textIcon" size="small" />
        <Span bold uppercase>
          {textButtonToRender}
        </Span>
        <div className={'FileField-progress ' + (percentCompleted > 0 ? 'FileField--loading' : '')}>
          <Loader loaded={percentCompleted} grow />
        </div>
      </Dropzone>
      {url && (
        <div className="FileField-file">
          <Span bold className="FileField-name">
            {url && (
              <A href={url} title={file} targetBlank>
                {truncatedFilename}
              </A>
            )}
          </Span>
          {removable && url && <Cross className="FileField-remove" size="small" onClick={onRemove} />}
        </div>
      )}
    </div>
  );
};
