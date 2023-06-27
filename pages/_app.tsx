import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '@/seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
