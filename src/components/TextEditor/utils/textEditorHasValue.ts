import { TextEditorValue } from '../types';

export const textEditorHasValue = (textEditorValue: TextEditorValue): boolean => {
  const anyValueLongerThanTen = textEditorValue.some((item) => item?.children[0]?.text?.length > 5);

  return anyValueLongerThanTen;
};
