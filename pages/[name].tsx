import { Store } from '@/types/store';
import { GetStaticPropsContext } from 'next';
import styles from '@/styles/detail.module.scss';
import DetailHeader from '@/components/home/DetailHeader';
import DetailContent from '@/components/home/DetailContent';
import useCurrentStore from '@/hooks/useCurrentStore';
import { useRouter } from 'next/router';

interface Props {
  store: Store;
}

const DetailPage = ({ store }: Props) => {
  const expanded = true;

  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();
  const goToMap = () => {
    setCurrentStore(store);
    router.push(
      `/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`
    );
  };

  return (
    <div
      className={`${styles.detailSection} ${styles.selected} ${styles.expanded}`}
    >
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onArrowClick={goToMap}
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