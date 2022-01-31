import '../styles/tailwind.css';
import { ChakraProvider } from '@chakra-ui/react';
import store from '../src/store';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import unFetch from 'isomorphic-unfetch';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const fetcher = (url, method, Auth) =>
  unFetch(url, { method: method, headers: { Authorization: Auth } }).then(
    (res) => res.json()
  );

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
