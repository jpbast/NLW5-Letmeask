import { AppProps } from 'next/dist/next-server/lib/router/router'

import { ThemeProvider } from 'styled-components'
import AuthProvider from '../providers/authProvider'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
};

export default MyApp
