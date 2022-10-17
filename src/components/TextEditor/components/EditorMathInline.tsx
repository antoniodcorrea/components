import React, { useEffect, useState } from 'react';
import katex from 'katex';

import './EditorMathInline.less';

export const EditorMathInline: React.FC = ({ children }) => {
  const [formula, setFormula] = useState<string>('');

  useEffect(() => {
    try {
      React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const text = child?.props?.text?.text;

        const htmlString = katex.renderToString(text, {
          output: 'html',
        });
        setFormula(htmlString);
      });
    } catch (error) {
      console.log(error);
    }
  }, [children]);

  return (
    <span className="EditorMathInline">
      <span
        className="EditorMathInline-formula"
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: formula }}
      ></span>
      <span className="EditorMathInline-source" contentEditable="false">
        {children}
      </span>
    </span>
  );
};
