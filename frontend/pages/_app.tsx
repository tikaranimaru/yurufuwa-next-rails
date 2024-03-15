import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from './components/layouts/header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
