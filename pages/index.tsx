import DetailSection from '@/components/home/DetailSection';
import HomeHeader from '@/components/home/Header';
import MapSection from '@/components/home/MapSection';
import useStores from '@/hooks/useStores';
import { Store } from '@/types/store';
import { NextSeo } from 'next-seo';
import { Fragment, useEffect } from 'react';

interface Props {
  stores: Store[];
}

export default function Home({ stores }: Props) {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <NextSeo
        title="매장 지도"
        description="Next.js로 만든 매장 지도 서비스 입니다."
        canonical="https://ellie-nextjs-map.vercel.app/"
        openGraph={{ url: 'https://ellie-nextjs-map.vercel.app/' }}
      />
      <HomeHeader />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const stores = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/stores'
  ).then((res) => res.json());
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
