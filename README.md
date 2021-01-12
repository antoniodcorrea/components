# Components library

Components library by antoniodcorrea

## Build and publish

To build, run:

    npm run storybook

The build is done via script that flat the structure inside `./dist`

To publish do:

    npm run publish:custom

Whole process

    git checkout master && git merge dev
    npm run build
    git add . && git commit -m "Merge with master"
    npm version patch | minor | major
    npm run publish:custom

## Test

    npm run test

## Notes

- Use of aliased urls is forbidden, as the client code can't interpret aliased routes

## Bugs

### DatePicker

- Probably will need validation for custom input: https://stackoverflow.com/questions/56608135/react-datepicker-with-custom-input-for-user-input-not-working

### Update for test

...
