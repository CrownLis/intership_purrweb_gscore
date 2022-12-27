import type { AppProps } from 'next/app';
import App, { AppInitialProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import mainTheme from '@/theme';
import { wrapper } from '@/store/store';

import '@/assets/styles/core.css';

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps<AppInitialProps>((store) => async (context) => {
  return {
    pageProps: {
      ...(await App.getInitialProps(context)).pageProps,
      pathname: context.ctx.pathname,
    },
  };
});

export default MyApp;
