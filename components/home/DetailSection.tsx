import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import styles from '@/styles/detail.module.scss';
import { Store } from '@/types/store';
import { useState } from 'react';
import useSWR from 'swr';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection}
      ${currentStore ? styles.selected : ''}
      ${expanded ? styles.expanded : ''}`}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onArrowClick={() => setExpanded(!expanded)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};

export default DetailSection;
