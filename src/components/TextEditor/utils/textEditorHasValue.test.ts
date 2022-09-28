import { textEditorHasValue } from './textEditorHasValue';

describe('Correctly returns', () => {
  it('Correctly returns false', () => {
    const trespassedAmountImages = textEditorHasValue([
      {
        type: 'text',
        children: [
          {
            text: 'abcde',
          },
        ],
      },
    ]);

    expect(trespassedAmountImages).toBeFalsy();
  });
  it('Correctly returns true', () => {
    const trespassedAmountImages = textEditorHasValue([
      {
        type: 'text',
        children: [
          {
            text: 'abcdef',
          },
        ],
      },
    ]);

    expect(trespassedAmountImages).toBeTruthy();
  });
  it('Correctly returns false', () => {
    const trespassedAmountImages = textEditorHasValue([]);

    expect(trespassedAmountImages).toBeFalsy();
  });
  it('Correctly returns false', () => {
    const trespassedAmountImages = textEditorHasValue([
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
    ]);

    expect(trespassedAmountImages).toBeFalsy();
  });
});
