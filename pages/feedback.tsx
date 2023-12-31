import Header from '@/components/common/Header';
import FeedbackSection from '@/components/feedback/FeedbackSection';
import { getFeedbackListFromFirestore } from '@/firebase/feedback';
import { Feedback } from '@/types/feedback';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

interface Props {
  initialFeedbackList: Feedback[];
}

export default function Feedback({ initialFeedbackList }: Props) {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 남겨주세요."
        canonical="https://ellie-nextjs-map.vercel.app/feedback"
        openGraph={{ url: 'https://ellie-nextjs-map.vercel.app/feedback' }}
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom', // 브라우저 터치 액션은 pinch-zoom만 허용
        }}
      >
        <FeedbackSection initialFeedbackList={initialFeedbackList} />
      </main>
    </Fragment>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
}
