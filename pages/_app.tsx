/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { END } from 'redux-saga';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { SagaStore, wrapper } from '@State';
import { theme, GlobalStyle } from '@Styles';

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
      <>
        <Head>
          <title>Darqube</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default wrapper.withRedux(DarqubeApp);
