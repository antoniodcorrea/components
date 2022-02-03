import React, { useEffect, useState } from 'react';

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

const initialValue = [
  {
    type: 'image',
    image: {
      original:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/original/2015-M10C.png',
      w200h200:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/w200h200/2015-M10C.png',
      w600h600:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/w600h600/2015-M10C.png',
      w1200h1200:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/w1200h1200/2015-M10C.png',
    },
    ratio: 1.31,
    children: [
      {
        text: 'Some text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '',
      },
    ],
  },
  {
    type: 'image',
    image: {
      original:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/original/2015-M10C.png',
      w200h200:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/w200h200/2015-M10C.png',
      w600h600:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/w600h600/2015-M10C.png',
      w1200h1200:
        'https://www.dev.antoniodiaz.me:3000/media/files/e4e2bb46-c210-4a47-9e84-f45c789fcec1/projects/w1200h1200/2015-M10C.png',
    },
    ratio: 1.31,
    children: [
      {
        text: '',
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
