import { Text } from 'slate';
import escapeHtml from 'escape-html';

export const toHtml = (node): string => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
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
      string = `<span class="TextEditor-uppercase">${string}</span>`;
    }
    if (node.inlineCode) {
      string = `<code>${string}</code>`;
    }

    return string;
  }

  const children = node.children.map((n) => toHtml(n)).join('');

  switch (node.type) {
    case 'h1':
      return `<h1>${children}</h1>`;
    case 'h2':
      return `<h2>${children}</h2>`;
    case 'h3':
      return `<h3>${children}</h3>`;
    case 'ul':
      return `<ul>${children}</ul>`;
    case 'quote':
      return `<blockquote>${children}</blockquote>`;
    case 'code':
      return `<pre><code>${children}</code></pre>`;
    case 'image':
      return `<img src="${escapeHtml(node.image.original)}" />`;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return children;
  }
};
