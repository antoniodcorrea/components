// Type declaration for SVGs

// declare module '*.svg' {
//   import React = require('react');
//   export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }

declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
