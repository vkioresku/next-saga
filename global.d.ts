import 'styled-components';
import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';

// Create type for svg imports
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

// Create style types and augment MaterialUI theme
interface Color {
  [key: string]: string;
}

interface DarQubeTheme {
  colors: Color;
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

declare module 'styled-components' {
  interface DefaultTheme extends MuiTheme {}
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme extends DarQubeTheme {}
  // allow configuration using `createMuiTheme`
  interface ThemeOptions extends DarQubeTheme {}
}
