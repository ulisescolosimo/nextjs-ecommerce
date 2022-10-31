import "../styles/globals.css";
import { Provider } from 'react-redux'
import store from '../utils/store'
import {SessionProvider, sessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
