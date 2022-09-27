import '../styles/global.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

export default function DocsApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
