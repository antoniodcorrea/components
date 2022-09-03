import React, { useEffect, useState } from 'react';
import { ReactEditor, useFocused, useSelected, useSlate } from 'slate-react';

import { Fade, ImageField } from '../..';
import { useCustomEditor } from '../hooks/useCustomEditor';
import { ImageUpload } from '../types';
import { ImageElement } from '../types/ImageElement';

interface Props {
  attributes: any;
  imageUploadService?: ImageUpload;
  element: ImageElement;
  ratio: number;
}

export const EditorImage: React.FC<Props> = ({ attributes, element, children, imageUploadService, ratio }) => {
  const [percentCompleted, setPercentCompleted] = useState<number>(0);
  const [image, setImage] = useState<string | ArrayBuffer>(undefined);
  const [imageError, setImageError] = useState<string>(null);
  const selected = useSelected();
  const focused = useFocused();
  const editor = useSlate();
  const { updateImageBlock, removeImageBlock } = useCustomEditor();
  const path = ReactEditor.findPath(editor, element);

  const uploadFilesToServer = async (file) => {
    if (!imageUploadService) {
      return;
    }

    try {
      const data = await imageUploadService.uploadFileToServer({
        file,
        setPercentCompleted,
      });

      const image: ImageElement = {
        ...element,
        image: {
          original: data?.file,
        },
      };
      updateImageBlock(editor, image, path);
    } catch (error) {
      setImageError(error?.message);
    }
  };

  const onRemoved = (): void => {
    removeImageBlock(editor, path);

    setImageError(undefined);
    setImage(undefined);
  };

  const onWrapperClick = () => {
    ReactEditor.focus(editor);
  };

  const removeFilesFromServer = (src: string) => {
    if (!imageUploadService) {
      return;
    }

    try {
      imageUploadService.removeFileFromServer({
        src,
        onRemoved,
      });
    } catch (error) {
      setImageError(error.message);
    }
  };

  const onMouseLeave = async () => {
    setImageError(undefined);
  };

  useEffect(() => {
    const srcOriginal = element?.image?.original;

    setImage(srcOriginal);
  }, [element]);

  return (
    <div
      className={'EditorImage' + (selected && focused ? ' EditorImage--selected' : '')}
      onMouseLeave={onMouseLeave}
      contentEditable={false}
      suppressContentEditableWarning
      onClick={onWrapperClick}
      {...attributes}
    >
      <ImageField
        className="EditorImage-image"
        label="My file"
        name="userImage"
        image={image as string}
        grow={false}
        removable
        uploadFiles={uploadFilesToServer}
        onRemove={removeFilesFromServer}
        percentCompleted={percentCompleted}
        ratio={ratio}
        accept=".jpg,.jpeg,.png"
      />
      <Fade mounted={!!imageError} position="absolute">
        <span className="EditorImage-error">{imageError}</span>
      </Fade>
      <div className="EditorImage-title">{children}</div>
    </div>
  );
};
