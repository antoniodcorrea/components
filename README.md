# Components library

Components library by antoniodcorrea

## Build and publish

To build, run:

    npm run storybook

The build is done via script that flat the structure inside `./dist`

Whole process

    <!-- git checkout master && git merge dev -->
    npm run build
    git add . && git commit -m "[COMMIT_MESSAGE]"
    npm version patch | minor | major
    npm run publish:custom

Only publish:

    npm run publish:custom

## Test

    npm run test

## Run Storybook

- Set proper node version with `nvm use`
- Remove packages with `rm -rf ./.node_modules package-lock.json``
- Reintall packages with `npm i --legacy-peer-deps`

## Notes

- Use of aliased urls is forbidden, as the client code can't interpret aliased routes

## Bugs

### DatePicker

- Probably will need validation for custom input: <https://stackoverflow.com/questions/56608135/react-datepicker-with-custom-input-for-user-input-not-working>

### Update for test

[1][2][3]
