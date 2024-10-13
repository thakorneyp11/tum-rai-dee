import React from 'react';
import type { AppProps } from 'next/app';
import { ActivityProvider } from '../context/ActivityContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActivityProvider>
      <Component {...pageProps} />
    </ActivityProvider>
  );
}

export default MyApp;
