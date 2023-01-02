import type { AppProps } from 'next/app';
import App, { AppInitialProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { getCookie } from 'cookies-next';

import mainTheme from '@/theme';
import { axiosInstance } from '@/api';
import { wrapper } from '@/store/store';

import '@/assets/styles/core.css';
import { authMe } from '@/store/ducks/user/asyncAction';

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

  let isError = false;
  const { user } = store.getState();
  try {
    if (token && user.user === null) {
      await store.dispatch(authMe()).unwrap();
    }
  } catch (e) {
    isError = true;
  }

  if (isError) {
    return {
      redirect: {
        permanent: false,
        destination: '/logIn',
      },
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        pathname: context.ctx.pathname,
      },
    };
  }

  return {
    pageProps: {
      ...(await App.getInitialProps(context)).pageProps,
      pathname: context.ctx.pathname,
    },
  };
});

export default MyApp;
