import React from 'react';
import { FileField } from '.';

export default {
  component: FileField,
  title: 'FileField',
};

export const Default = () => {
  return (
    <FileField label="This is the label" textButton="Upload file" originalName="This is the original name" removable />
  );
};
