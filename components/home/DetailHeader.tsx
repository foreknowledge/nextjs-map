import styles from '@/styles/detail.module.scss';
import headerStyles from '@/styles/header.module.scss';
import { Store } from '@/types/store';
import copy from 'copy-to-clipboard';
import { AiOutlineShareAlt } from 'react-icons/ai';
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
      {currentStore && (
        <div className={styles.flexRow}>
          <p className={styles.title}>{currentStore.name}</p>
          <button
            className={headerStyles.box}
            onClick={() => copy(`${location.origin}/${currentStore.name}`)}
          >
            <AiOutlineShareAlt size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailHeader;
