import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from '../styles';

const ThemeDecorator = ({ children }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  </StylesProvider>
);

export default ThemeDecorator;
