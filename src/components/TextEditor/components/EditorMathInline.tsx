import React, { useEffect, useState } from 'react';
import katex from 'katex';

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
    <span
      className="math-inline"
      dangerouslySetInnerHTML={{ __html: formula }}
      style={{ userSelect: !!formula.length ? 'none' : 'unset' }}
    ></span>
  );
};
