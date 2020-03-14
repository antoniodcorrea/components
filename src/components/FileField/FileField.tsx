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
  onChange?: (acceptedFiles: File[]) => void;
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
  onChange,
  percentCompleted,
  onRemove,
  maxLength,
}) => {
  const textButtonToRender = textButton ? textButton : 'Upload file';
  const fileName = url && url.split('/').pop();
  const extension = url && url.split('.').pop();
  const truncatedFilename =
    !maxLength || fileName.length <= maxLength ? fileName : fileName.substring(0, maxLength) + '[...].' + extension;

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
      <Dropzone className="FileField-dropzone" name={name} multiple={false} accept={accept} onDrop={onChange}>
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
              <A href={url} title={fileName} targetBlank>
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
