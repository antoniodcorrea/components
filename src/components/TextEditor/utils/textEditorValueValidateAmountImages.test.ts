import { textEditorValueValidateAmountImages } from './textEditorValueValidateAmountImages';

const textEditorValue = [
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
describe('Correctly returns', () => {
  it('Correctly returns true', () => {
    const trespassedAmountImages = textEditorValueValidateAmountImages(textEditorValue, 1);

    expect(trespassedAmountImages).toBeTruthy();
  });
  it('Correctly returns true', () => {
    const trespassedAmountImages = textEditorValueValidateAmountImages(textEditorValue, 0);

    expect(trespassedAmountImages).toBeFalsy();
  });
  it('Correctly returns false', () => {
    const trespassedAmountImages = textEditorValueValidateAmountImages([
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
      ...textEditorValue,
    ]);

    expect(trespassedAmountImages).toBeFalsy();
  });
});
