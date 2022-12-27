import type { AppProps } from 'next/app';
import App, { AppInitialProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { getCookie } from 'cookies-next';

import mainTheme from '@/theme';
import { axiosInstance } from '@/api';
import { wrapper } from '@/store/store';
import { getProducts } from '@/store/ducks/products/asyncAction';

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
  const token = getCookie('auth-token', {
    req: context.ctx.req,
  });

  axiosInstance.defaults.headers.common.authorization = token ? `Bearer ${token}` : null;
  await store.dispatch(getProducts()).unwrap();

  return {
    pageProps: {
      ...(await App.getInitialProps(context)).pageProps,
      pathname: context.ctx.pathname,
    },
  };
});

export default MyApp;
