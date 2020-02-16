# Components library

Components library by antoniodcorrea

## Run app

#### Build

To build, run:

    npm run build

The build is done via TypeScript. The full build script is:

    "build": "tsc -d && cd src && find .  -name '*.less' -exec rsync -R {} ../dist/src ';' && cd ..",

It uses `tsc -d` to build the `.ts|.tsx` files, and then searches `.less` files and copies them to `dist/src`.
The drawbacks with this setup is that less will be a requirement for the client.

#### Test

    npm run test

## Colors naming convention

Qué nombres se usan en variables de colores?

    base
    background
    primary
    accent
    success
    warning
    error

Eliminar colores

## TODO

- Fix Input
- Rename `warning` to `alert`, and `error` to `warning`
- Pending components:
  - Fade
  - TextArea
  - TextEditor
  - SvgLoader
