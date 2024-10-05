import escapeHtml from 'escape-html';
import { Text } from 'slate';
import { TextEditorElement } from './types/TextEditorElement';
import { TextElement } from './types/TextElement';

export const toHtml = (node: TextEditorElement | TextElement): string => {
  if (Text.isText(node)) {
    const escapedNodeText = escapeHtml(node.text);
    let string = escapedNodeText;

    if (node.type !== 'math' && !node.mathInline) {
      // We need to replace manually the html entities within the text into html elements to render in the frontend: breaklines (\n) and spaces (\u2005)
      // Dont do it for math formulas
      const spaceHtmlTag = '<span style="width: 10px; display: inline-block"></span>';
      const breackHtmlTag = '<br />';
      string = escapedNodeText.replace(/\n/g, breackHtmlTag).replace(/\u2005/g, spaceHtmlTag);
    }

    if (!string?.trim().length) {
      string = '&nbsp;';
    }
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    if (node.italic) {
      string = `<em>${string}</em>`;
    }
    if (node.underlined) {
      string = `<u>${string}</u>`;
    }
    if (node.uppercase) {
      string = `<span class="uppercase">${string}</span>`;
    }
    if (node.mark) {
      string = `<mark>${string}</mark>`;
    }
    if (node.mathInline) {
      string = `<span><span class="math-inline">${string}</span></span>`;
    }

    return string;
  }

  const children = node.children.map((item) => toHtml(item)).join('');

  switch (node.type) {
    case 'h1':
      return `<h1>${children}</h1>`;
    case 'h2':
      return `<h2>${children}</h2>`;
    case 'bulleted-list':
      return `<ul>${children}</ul>`;
    case 'list-item':
      return `<li>${children}</li>`;
    case 'quote':
      return `<blockquote>${children}</blockquote>`;
    case 'math':
      // We need to clean the <br> added in the inline nodes
      const childrenWithoutBr = children.replace(/<br.{0,2}>/g, '');

      return `<div><div class="math">${childrenWithoutBr}</div></div>`;
    case 'code':
      return `<pre><code>${children}</code></pre>`;
    case 'image':
      return `<img src="${escapeHtml(node.image?.original)}" data-ratio="${escapeHtml(node.ratio)}" />`;
    case 'youtube':
      return `<div class="video"><iframe src="https://www.youtube.com/embed/${node.videoId}?controls=0" allow="modestbranding" aria-label="Youtube video" frameBorder="0" ></iframe></div>`;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'centered':
      return `<p class="centered" style="text-align: center">${children}</p>`;
    case 'caption':
      return `<figcaption>${children}</figcaption>`;
    case 'text':
      return `<p>${children}</p>`;
    case 'link':
      return `<a href="${escapeHtml(node.url)}" target="_blank">${children}</a>`;
    default:
      return `<p>${children}</p>`;
  }
};
