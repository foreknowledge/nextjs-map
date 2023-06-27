import styles from '@/styles/detail.module.scss';
import { Store } from '@/types/store';
import { IoIosArrowUp } from 'react-icons/io';

interface Props {
  currentStore: Store | undefined;
  expanded: boolean;
  onArrowClick: () => void;
}

const DetailHeader = ({ currentStore, expanded, onArrowClick }: Props) => {
  return (
    <div className={styles.header}>
      <button
        className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`}
        disabled={!currentStore}
        onClick={onArrowClick}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      {!currentStore && <p className={styles.title}>매장을 선택해주세요</p>}
      {currentStore && <p className={styles.title}>{currentStore.name}</p>}
    </div>
  );
};

export default DetailHeader;
