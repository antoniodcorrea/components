import { TextEditorValue } from '../types';

const DEFAULT_LIMIT_NUMBER_IMAGES = 10;

/*
  Validates that there are less images than the limit provided (or default)
*/

export const textEditorValueValidateAmountImages = (
  textEditorValue: TextEditorValue,
  limit = DEFAULT_LIMIT_NUMBER_IMAGES
): boolean => {
  const textEditorValueImagesLength = textEditorValue.filter((item) => item?.type === 'image').length;
  const hasLessImagesThanLimit = textEditorValueImagesLength <= limit;

  console.log('hasLessImagesThanLimit: ', hasLessImagesThanLimit);

  return hasLessImagesThanLimit;
};
