import React, { useEffect, useState } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { H1 } from '../H1';
import { Hr } from '../Hr';
import { TextEditor } from '.';
import { toHtml } from './toHtml';

type UploadFileToServer = (options: {
  file: File;
  setPercentCompleted: (number: number) => void;
}) => Promise<{ file: string }>;

type RemoveFileFromServer = (options: { src: string; onRemoved: () => void }) => Promise<void>;

class ImageUpload {
  uploadFileToServer: UploadFileToServer = async () => ({
    file: '',
  });

  removeFileFromServer: RemoveFileFromServer = async () => null;
}

const initialValue = [
  {
    children: [
      {
        text: 'List',
      },
    ],
  },
  {
    type: 'bulleted-list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            code: true,
            text: 'One',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            code: true,
            text: 'Two',
          },
        ],
      },
    ],
  },
];
export default {
  component: TextEditor,
  title: 'TextEditor ',
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  const imageUpload = new ImageUpload();
  const [value, setValue] = useState([]);
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

  useEffect(() => {
    setValue(initialValue);
  }, []);

  return (
    <div>
      <H1>Sortable list</H1>
      <Hr spacer />
      <div style={{ width: '500px' }}>
        <TextEditor initialValue={value} onChange={onChangeTextEditorValue} imageUploadService={imageUpload} />
      </div>
    </div>
  );
};
