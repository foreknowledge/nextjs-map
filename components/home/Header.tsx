import { AiOutlineShareAlt } from 'react-icons/ai';
import Header from '../common/Header';
import { VscFeedback } from 'react-icons/vsc';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import { useCallback } from 'react';
import useMap from '@/hooks/useMap';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';

const HomeHeader = () => {
  const router = useRouter();
  const { resetMapOptions, getMapOptions } = useMap();

  const replaceAndCopyUrl = useCallback(() => {
    const { center, zoom } = getMapOptions();
    const query = `/?zoom=${zoom}&lat=${center[0]}&lng=${center[1]}`;

    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <Header
      onLogoClick={resetMapOptions}
      rightElements={[
        <button
          onClick={replaceAndCopyUrl}
          className={styles.box}
          style={{ marginRight: '8px' }}
          key="button"
        >
          <AiOutlineShareAlt size={20} />
        </button>,
        <Link href="/feedback" className={styles.box} key="link">
          <VscFeedback size={20} />
        </Link>,
      ]}
    />
  );
};

export default HomeHeader;
