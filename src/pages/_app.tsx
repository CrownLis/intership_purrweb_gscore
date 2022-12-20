import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import mainTheme from '@/theme';
import '../../styles/core.css';
import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
