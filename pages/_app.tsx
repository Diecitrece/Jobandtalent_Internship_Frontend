import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Job and Talent</title>
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
