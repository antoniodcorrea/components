# Components library

Components library by antoniodcorrea

## Run app

#### Build

To build, run:

    npm run storybook

The build is done via set of scripts to copy run TypeScript, lessc, and bash find to properly locate the css files.

Once the build has finished, all occurrences of `.less` in `.js` files within `./components` is changed to `.less`.

#### Test

    npm run test

#### Bugs

##### Select component

There is an issue with refocusing the selector after change when using Control component:

- https://stackoverflow.com/questions/58538908/react-select-focus-doesnt-show-cursor-after-change
- https://github.com/JedWatson/react-select/issues/3832

This is unconvenient.

Rwo options:

1.  Use the SelectContainer component, and live with it while it is not fixed
2.  Place the label outside the react-select component; the label will be displayed even if the select is focused, but not when it is filled
