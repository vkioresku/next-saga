import React from 'react';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { END } from 'redux-saga';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { SagaStore, wrapper } from '@State';

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: '#001F3F',
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${(props) => props.theme.niceBlack}; 
  }
`;

class DarqubeApp extends App {
  getInitialProps = async ({ Component, ctx }: AppContext) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store as SagaStore).sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Darqube</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default wrapper.withRedux(DarqubeApp);
