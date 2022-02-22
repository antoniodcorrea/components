import React, { useEffect, useRef, useState } from 'react';
import katex from 'katex';

export const EditorMathInline: React.FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>();
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    try {
      React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const text = child?.props?.text?.text;

        const htmlString = katex.renderToString(text, {
          output: 'mathml',
        });
        setHtml(htmlString);
      });
    } catch (error) {
      console.log(error);
    }
  }, [children]);

  return (
    <span
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ userSelect: !!html.length ? 'none' : 'unset' }}
    ></span>
  );
};
