import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { TextEditor } from '.';
import { toHtml } from './toHtml';

type UploadFileToServer = (options: {
  file: File;
  setPercentCompleted: (number: number) => void;
}) => Promise<{ image: string }>;

type RemoveFileFromServer = (options: { src: string; onRemoved: () => void }) => Promise<void>;

class ImageUpload {
  uploadFileToServer: UploadFileToServer = async () => ({
    image: '',
  });

  removeFileFromServer: RemoveFileFromServer = async () => null;
}

export default {
  component: TextEditor,
  title: 'TextEditor ',
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  const imageUpload = new ImageUpload();

  const onChangeTextEditorValue = (editorData) => {
    const dataToHtml = toHtml({
      type: '',
      children: editorData,
    });

    console.clear();
    console.log('=======');
    console.log('dataToHtml');
    console.log(dataToHtml);
    console.log('editorData:');
    console.log(JSON.stringify(editorData, null, 4));
    console.log('=======');
  };

  return (
    <div>
      <H1>Sortable list</H1>
      <Hr spacer />
      <div style={{ width: '500px' }}>
        <TextEditor initialValue={[]} onChange={onChangeTextEditorValue} imageUploadService={imageUpload} />
      </div>
    </div>
  );
};
