import '../styles/global.sass';
import { AppProps } from 'next/app';
import { FuegoProvider } from '@nandorojo/swr-firestore';

import { FirebaseFuego } from '@configs';

const fuego = new FirebaseFuego();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FuegoProvider fuego={fuego}>
      <Component {...pageProps} />
    </FuegoProvider>
  );
}
