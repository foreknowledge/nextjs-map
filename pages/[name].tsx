import { Store } from '@/types/store';
import { GetStaticPropsContext } from 'next';

interface Props {
  store: Store;
}

const DetailPage = ({ store }: Props) => {
  return <div>detail: {store.name}</div>;
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
