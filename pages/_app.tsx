import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '@/seo.config';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MBE1G4VTDQ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MBE1G4VTDQ');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
