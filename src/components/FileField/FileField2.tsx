import React from 'react';
import Dropzone from 'react-dropzone';
import { Button } from '../Button';
import { Cross } from '../Svg';
import { Loader } from '../Loader';
import { Span } from '../Span';
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
  onChange?: (acceptedFiles: File[]) => void;
  onRemove?: () => void;
}

export const FileField2: React.FC<Props> = ({
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
}) => {
  const fileName = url && url.split('/').pop();

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
        <label className="FileField-label" htmlFor="">
          <Span bold>{label}</Span>
        </label>
      )}
      <div className="FileField-content">
        <Button text={textButton} />
        <div className={'FileField-progress ' + (percentCompleted > 0 ? 'FileField--loading' : '')}>
          <Loader loaded={percentCompleted} grow />
        </div>
        <Dropzone className="FileField-dropzone" name={name} multiple={false} accept={accept} onDrop={onChange} />
      </div>
      {url && (
        <div className="FileField-fileName">
          <Span bold grow>
            {fileName && url && (
              <A href={url} targetBlank>
                {fileName}
              </A>
            )}
            {fileName && !url && fileName}
            {removable && url && <Cross className="FileField-remove" onClick={onRemove} />}
          </Span>
        </div>
      )}
    </div>
  );
};
