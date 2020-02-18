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

## Notes

### SVG

#### «Use» tag

It is possible to import the SVGs with `<use>` tag, but has to be done with an absolute path, and a script config is needed for that: `-s ./src/assets/svg`.

     <svg className={'SvgIcon ' + (className ? className : '') + (size ? ' SvgIcon--' + size : '')}>
       <use xlinkHref={'./' + name + '.svg#' + name} />
       {children}
     </svg>

#### SvgIcon wrapper component

A different solution would be to pass the SVG as children within a `SvgIcon` wrapper component, and inside it add the style with `React.cloneElement`.

    <SvgIcon >
      <Circle />
    </SvgIcon>

    const SvgIcon: React.FC<Props> = ({ children, size, className }) =>
      React.cloneElement(children as React.ReactElement<any>, {
        className: 'SvgIcon ' + (className ? className : '') + (size ? ' SvgIcon--' + size : ''),
      });

A webpack config has to be provided for this last solution:

    npm i @svgr/webpack

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
