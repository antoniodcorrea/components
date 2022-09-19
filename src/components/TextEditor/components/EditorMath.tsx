import React, { useEffect, useState } from 'react';
import katex from 'katex';

import './EditorMath.less';

export const EditorMath: React.FC = ({ children }) => {
  const [formula, setFormula] = useState('');
  const [error, setError] = useState<boolean>(false);
  const child = React.Children.only(children[0]);

  useEffect(() => {
    const text = child?.props?.text?.text;

    if (!text) return;

    try {
      const html = katex.renderToString(text, {
        output: 'html',
      });

      setError(false);
      setFormula(html);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, [children]);

  return (
    <div className={'EditorMath' + (error ? ' math--withError' : '')}>
      {!error && (
        <div className="EditorMath-formula" contentEditable="true" dangerouslySetInnerHTML={{ __html: formula }}></div>
      )}
      <div className={'EditorMath-source'}>{children}</div>
    </div>
  );
};
