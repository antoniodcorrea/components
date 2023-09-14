import React from 'react';

import PlusCircle from '../../assets/svg/plusCircle.svg';
import { FileField } from '../FileField';
import { FileUploadItem } from './types';

import './FileFieldMultiple.less';
import { Accept } from 'react-dropzone';

interface Props {
  files?: FileUploadItem[];
  accept: Accept;
  onPressFileUpdated: (file: File, index) => Promise<void>;
  onNameChange: (fileName: string, index) => void;
  onPressFileRemove: (src: string) => Promise<void>;
  onAddFile: () => void;
  renderAdd: boolean;
}

export const FileFieldMultiple: React.FC<Props> = ({
  files,
  accept,
  onPressFileUpdated,
  onPressFileRemove,
  onAddFile,
  onNameChange,
  renderAdd,
}) => (
  <div className="FileFieldMultiple" id="FileFieldMultiple">
    <div className="ControlProject-files">
      {files?.map((item, index) => (
        <FileField
          key={item.url}
          className="ControlProject-file"
          name="Some file" // TODO: pass name as props
          fileName={item.name}
          accept={accept}
          fileUrl={item.url}
          uploadFiles={(file) => onPressFileUpdated(file, index)}
          onRemove={onPressFileRemove}
          percentCompleted={item.percentCompleted}
          onNameChange={(fileName) => onNameChange(fileName, index)}
          removable
          success={!!item.url}
          error={!!item.error}
        />
      ))}
      {renderAdd && (
        <div className="ControlProject-addFile" onClick={onAddFile}>
          <PlusCircle />
        </div>
      )}
    </div>
  </div>
);
