import { createGlobalStyle } from 'styled-components';

type Color = { [color: string]: string };

type Theme = {
  colors: Color;
};

type ThemeWrapper = {
  theme: Theme;
};

export const theme: Theme = {
  colors: {
    green: '#30836D',
    lightGreen: '#3DBB9A',
    magenta: '#ED3262',
    yellow: '#B58246',
    lightYellow: '#F8B464',
    darkBlue: '#15191E',
    lightBlue: '#F7F8F9',
    white: '#FFFFFF',
    grey: '#F2F2F2',
    black: '#000000',
  },
};

export const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
