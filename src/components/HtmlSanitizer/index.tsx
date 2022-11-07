import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface Props {
  html: string;
  tagsAllowed?: Array<string>;
  attributesAllowed?: Array<string>;
}

// set all elements owning target to target=_blank
// https://github.com/cure53/DOMPurify/issues/317#issuecomment-728100494
const addTargetHook = (node) => {
  if ('target' in node) {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener');
  }
};
DOMPurify.addHook('afterSanitizeAttributes', addTargetHook);

export const HtmlSanitizer: React.FC<Props> = ({ html, tagsAllowed, attributesAllowed = [] }) => {
  if (!html) return null;

  const sanitizedHtml = DOMPurify.sanitize(html, {
    ADD_TAGS: tagsAllowed,
    ADD_ATTR: ['target', ...attributesAllowed],
  });

  return <div className="HtmlSanitizer" id="HtmlSanitizer" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};
