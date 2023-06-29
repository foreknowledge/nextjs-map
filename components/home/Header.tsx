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
          aria-label="현재 주소 클립보드 복사"
        >
          <AiOutlineShareAlt size={20} color="#444" />
        </button>,
        <Link
          href="/feedback"
          className={styles.box}
          key="link"
          aria-label="피드백 페이지로 이동"
        >
          <VscFeedback size={20} color="#444" />
        </Link>,
      ]}
    />
  );
};

export default HomeHeader;
