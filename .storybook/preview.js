import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
/* Activate to center view */
// import { addDecorator } from '@storybook/react';
// import centered from '@storybook/addon-centered/react';
// addDecorator(centered);
/* END */
const customViewports = {
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1200px',
      height: '963px',
      padding: '10px',
    },
  },
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '801px',
      padding: '10px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: '800px',
      height: '801px',
      padding: '0px',
    },
  },
};

addParameters({
  viewport: {
    viewports: customViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'Desktop',
  },
});
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
