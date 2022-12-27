import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import mainTheme from '@/theme';
import '../../styles/core.css';
import 'swiper/css';
import { wrapper } from '@/store/store';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
