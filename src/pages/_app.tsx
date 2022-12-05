import '../../styles/core.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import mainTheme from '@/theme'

export default function App({ Component, pageProps }: AppProps) {

  return (
  <ThemeProvider theme={mainTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
