import { AiOutlineShareAlt } from 'react-icons/ai';
import Header from '../common/Header';
import { VscFeedback } from 'react-icons/vsc';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';

const HomeHeader = () => {
  return (
    <Header
      rightElements={[
        <button
          onClick={() => alert('복사!')}
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
