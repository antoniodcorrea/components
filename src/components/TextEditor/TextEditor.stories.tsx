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
    type: 'h1',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  {
    children: [
      {
        text: 'Lorem ',
      },
      {
        text: String.raw`c = \pm\sqrt{a^2 + b^2}\\ ba^2`,
        mathInline: true,
      },
      {
        text: ' ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis neque, ',
      },
      {
        text: ' eu dapibus nec, sollicitudin sed purus. Integer varius tortor metus, eu ullamcorper risus semper id. Nunc in fringilla enim. Nam bibendum consequat enim id convallis. Donec elementum lacus id massa tincidunt, sed tristique neque convallis. Aenean iaculis sem orci, quis maximus sem ultricies vitae. Fusce gravida ultricies accumsan.',
      },
    ],
  },
  {
    children: [
      {
        text: String.raw`c = \pm\sqrt{a^2 + b^2}\\ ba^2`,
      },
    ],
    type: 'math',
  },
  {
    type: 'h2',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  {
    children: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis neque, ',
      },
      {
        text: 'dapibus',
        mark: true,
      },
      {
        text: ' eu dapibus nec, sollicitudin sed purus. Integer varius tortor metus, eu ullamcorper risus semper id. Nunc in fringilla enim. Nam bibendum consequat enim id convallis. Donec elementum lacus id massa tincidunt, sed tristique neque convallis. Aenean iaculis sem orci, quis maximus sem ultricies vitae. Fusce gravida ultricies accumsan.',
      },
    ],
  },
  {
    children: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis neque, dapibus eu dapibus nec, sollicitudin sed purus. Integer varius tortor metus, eu ullamcorper risus semper id. Nunc in fringilla enim. Nam bibendum consequat enim id convallis. Donec elementum lacus id massa tincidunt, sed tristique neque convallis. Aenean iaculis sem orci, quis maximus sem ultricies vitae. Fusce gravida ultricies accumsan.',
      },
    ],
  },
  {
    type: 'image',
    image: {
      original: 'https://picsum.photos/id/134/1200/1200',
      w200h200: 'https://picsum.photos/id/134/200/200',
      w600h600: 'https://picsum.photos/id/134/600/600',
      w1200h1200: 'https://picsum.photos/id/134/1200/1200',
    },
    ratio: 1.31,
    children: [
      {
        text: 'Some text',
      },
    ],
  },
  {
    type: 'caption',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  {
    children: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis neque, dapibus eu dapibus nec, sollicitudin sed purus. Integer varius tortor metus, eu ullamcorper risus semper id. Nunc in fringilla enim. Nam bibendum consequat enim id convallis. Donec elementum lacus id massa tincidunt, sed tristique neque convallis. Aenean iaculis sem orci, quis maximus sem ultricies vitae. Fusce gravida ultricies accumsan.',
      },
    ],
  },
  {
    type: 'image',
    image: {
      original: 'https://picsum.photos/id/13/1200/1200',
      w200h200: 'https://picsum.photos/id/13/200/200',
      w600h600: 'https://picsum.photos/id/13/600/600',
      w1200h1200: 'https://picsum.photos/id/13/1200/1200',
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
