import { Store } from '@/types/store';
import { GetStaticPropsContext } from 'next';
import styles from '@/styles/detail.module.scss';
import DetailHeader from '@/components/home/DetailHeader';
import DetailContent from '@/components/home/DetailContent';

interface Props {
  store: Store;
}

const DetailPage = ({ store }: Props) => {
  const expanded = true;

  return (
    <div
      className={`${styles.detailSection} ${styles.selected} ${styles.expanded}`}
    >
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onArrowClick={() => null}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </div>
  );
};

export default DetailPage;

export async function getStaticPaths() {
  const stores = (await import('@/public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const stores = (await import('@/public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
}
