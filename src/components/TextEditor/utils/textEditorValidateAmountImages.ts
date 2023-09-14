import { TextEditorValue } from '../types';

const DEFAULT_LIMIT_NUMBER_IMAGES = 10;

/*
  Validates that there are less images than the limit provided (or default)
*/
export const textEditorValidateAmountImages = (
  textEditorValue: TextEditorValue,
  limit = DEFAULT_LIMIT_NUMBER_IMAGES
): boolean => {
  if (!textEditorValue) return false;
  const textEditorValueImagesLength = textEditorValue?.filter((item) => item?.type === 'image').length;
  const hasLessImagesThanLimit = textEditorValueImagesLength <= limit;

  return hasLessImagesThanLimit;
};
