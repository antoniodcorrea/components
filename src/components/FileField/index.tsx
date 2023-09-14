import React from 'react';

import { URLWrapper } from '@antoniodcorrea/utils';
import { FileField as FileFieldUi } from './FileField';
import { Accept } from 'react-dropzone';

import './FileField.less';

export interface Props {
  name?: string;
  label?: string;
  fileUrl?: string;
  fileName?: string;
  buttonText?: string;
  className?: string;
  grow?: boolean;
  percentCompleted?: number;
  removable?: boolean;
  accept?: Accept;
  size?: string;
  maxSize?: number;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploadFiles: (file: File) => void;
  onRemove?: (url: string) => void;
  onNameChange?: (name: string) => void;
}

export const FileField: React.FC<Props> = ({
  className,
  fileUrl,
  fileName,
  grow,
  label,
  buttonText,
  name,
  accept,
  removable = true,
  percentCompleted,
  maxSize,
  size,
  error,
  success,
  disabled,
  uploadFiles,
  onRemove,
  onNameChange,
}) => {
  const fileUrlWrapper = new URLWrapper(fileUrl);
  const filenameOrUrl = fileName === undefined || fileName === null ? fileUrlWrapper?.getFilename() : fileName;
  const buttonTextToRender = buttonText ? buttonText : 'Upload file';

  const uploadFilesToServer = async (file: File) => {
    await uploadFiles(file);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files || !files.length) return;

    const file = files[0];

    uploadFilesToServer(file);
  };

  const onDropAccepted = (files: File[]) => {
    if (!files || !files.length) return;
    const file = files[0];

    uploadFilesToServer(file);
  };

  const onFileRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    onRemove(fileUrl);
  };

  const onFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    onNameChange(value);
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const valueOrUrl = value || fileUrl;

    onNameChange(valueOrUrl);
  };

  return (
    <FileFieldUi
      name={name}
      label={label}
      fileUrl={fileUrl}
      buttonText={buttonText}
      className={className}
      grow={grow}
      maxSize={maxSize}
      percentCompleted={percentCompleted}
      removable={removable}
      accept={accept}
      size={size}
      error={error}
      success={success}
      disabled={disabled}
      buttonTextToRender={buttonTextToRender}
      filenameOrUrl={filenameOrUrl}
      onDropAccepted={onDropAccepted}
      onChange={onChange}
      onFileRemove={onFileRemove}
      onFileNameChange={onFileNameChange}
      onInputBlur={onInputBlur}
    />
  );
};
