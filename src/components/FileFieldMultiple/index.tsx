import React from 'react';

import { FileFieldMultiple as FileFieldMultipleUi } from './FileFieldMultiple';
import { FileUploadItem, ImageUpload } from './types';

interface Props {
  files: Array<FileUploadItem>;
  imageUploadService: ImageUpload;
  onChange: (files: Array<FileUploadItem>) => void;
}

export const FileFieldMultiple: React.FC<Props> = ({ files, imageUploadService, onChange }) => {
  // If there are no files, or every input already has a file
  const renderAdd = !files?.length || files.every((item) => !!item.url);

  const onFileUpload = async (file: File, id?: number): Promise<{ file: string }> => {
    if (!imageUploadService) {
      return;
    }

    try {
      const data = await imageUploadService.uploadFileToServer({
        file,
        setPercentCompleted: (completed: number) => {
          const filesWithPercentCompleted = files.map((item) => {
            // If the item is the one we are updating, or if its a new one
            if (item.id === id || !item.url) {
              return {
                ...item,
                percentCompleted: completed,
              };
            }

            return item;
          });
          onChange(filesWithPercentCompleted);
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const onPressFileUpdated = async (file: File, id: number) => {
    const uploadedFile = await onFileUpload(file, id);

    const filesUpdated = files.map((item) => {
      if (item.id === id) {
        return {
          id,
          url: uploadedFile.file,
          name: uploadedFile.file,
        };
      }

      return item;
    });

    onChange(filesUpdated);
  };

  const onPressFileRemove = async (src: string) => {
    if (!imageUploadService) return;

    try {
      await imageUploadService.removeFileFromServer({
        src,
        onRemoved: () => {
          const filteredFiles = files.filter((item) => item.url !== src);
          onChange(filteredFiles);
        },
      });
    } catch {}
  };

  const onAddFile = (): void => {
    const someEmptyFile = files.some((item) => !item.url);
    if (someEmptyFile) return;

    const filesWithNewFile = [
      ...files,
      {
        id: files.length,
        url: null,
        name: null,
      },
    ];
    onChange(filesWithNewFile);
  };

  const onNameChange = (fileName: string, id: number) => {
    const filesWithUpdatedName = files.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: fileName,
        };
      }

      return item;
    });

    onChange(filesWithUpdatedName);
  };

  return (
    <FileFieldMultipleUi
      localFiles={files}
      onPressFileUpdated={onPressFileUpdated}
      onNameChange={onNameChange}
      onPressFileRemove={onPressFileRemove}
      onAddFile={onAddFile}
      renderAdd={renderAdd}
    />
  );
};
