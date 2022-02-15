import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface Props {
  html: string;
}

export const HtmlSanitizer: React.FC<Props> = ({ html }) => {
  if (!html) return null;

  return (
    <div className="HtmlSanitizer" id="HtmlSanitizer" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
  );
};
