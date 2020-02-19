# Components library

Components library by antoniodcorrea

## Run app

#### Build

To build, run:

    npm run prepare

The build is done via TypeScript, a script running lessc, and a set of scripts to copy and remove the css files.

Once the build has finished, all occurrences of `.less` in `.js` files within `./components` is changed to `.less`.

#### Test

    npm run test

## Colors naming convention

## TODO

- Fix Input
- Rename `warning` to `alert`, and `error` to `warning`
- Pending components:
  - Fade
  - TextArea
  - TextEditor

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

#### SvgIcon wrapper component
