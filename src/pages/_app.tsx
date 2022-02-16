import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../providers/authProvider';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { User } from '../types/backend';
import NProgress from 'nprogress';
import router from 'next/router';

import 'nprogress/nprogress.css';

type Props = {
  user?: User;
};

router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
router.events.on('routeChangeError', () => NProgress.done());

const App = (props: AppProps & Props) => {
  const { pageProps, Component } = props;

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
