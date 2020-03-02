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

##### DatePicker

- Probably will need validation for custom input: https://stackoverflow.com/questions/56608135/react-datepicker-with-custom-input-for-user-input-not-working
