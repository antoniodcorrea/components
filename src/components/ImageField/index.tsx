import React, { useEffect, useState } from 'react';
import { FileRejection } from 'react-dropzone';
import { ERROR_MESSAGE_DEFAULT, ERROR_MESSAGE_FILE_TOO_BIG, FILE_MAX_SIZE_BYTES } from './constants';

import { FileType, ImageField as ImageFieldUi } from './ImageField';

export interface Props {
  name?: string;
  className?: string;
  image: string;
  grow?: boolean;
  rounded?: boolean;
  label?: string;
  removable?: boolean;
  accept?: FileType;
  percentCompleted: number;
  disabled?: boolean;
  maxSize?: number;
  error?: string;
  success?: boolean;
  ratio?: number;
  uploadFiles: (file: File) => void;
  onRemove?: (url: string) => void;
}

export const ImageField: React.FC<Props> = ({
  className,
  grow,
  rounded,
  label,
  image,
  name,
  accept,
  removable = false,
  maxSize = FILE_MAX_SIZE_BYTES,
  disabled,
  error,
  success,
  percentCompleted,
  ratio,
  uploadFiles,
  onRemove,
}) => {
  const [localError, setLocalError] = useState<string>();

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

  const onDropRejected = (fileRejection: FileRejection[]) => {
    if (!fileRejection.length) return;

    // Try/catch in case we can not navigate properly
    try {
      const error = fileRejection[0].errors[0].message;
      setLocalError(error);
    } catch {
      setLocalError(ERROR_MESSAGE_DEFAULT);
    }
  };

  const uploadFilesToServer = async (file: File) => {
    if (file.size > maxSize) {
      setLocalError(ERROR_MESSAGE_FILE_TOO_BIG);

      return;
    }

    await uploadFiles(file);
  };

  const onFileRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    onRemove(image);
  };

  const onImageFieldLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setLocalError(undefined);
  };

  useEffect(() => {
    if (!error) return;

    setLocalError(error);
  }, []);

  return (
    <ImageFieldUi
      className={className}
      grow={grow}
      image={image}
      label={label}
      name={name}
      accept={accept}
      maxSize={maxSize}
      removable={removable}
      percentCompleted={percentCompleted}
      rounded={rounded}
      disabled={disabled}
      error={localError}
      success={success}
      ratio={ratio}
      onDropAccepted={onDropAccepted}
      onDropRejected={onDropRejected}
      onChange={onChange}
      onFileRemove={onFileRemove}
      onImageFieldLeave={onImageFieldLeave}
    />
  );
};
