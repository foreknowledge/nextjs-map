import { Store } from '@/types/store';
import { useCallback } from 'react';
import { mutate } from 'swr';

const STORE_KEY = '/stores';

const useStores = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    // stores를 전역 상태로 저장
    mutate(STORE_KEY, stores);
  }, []);

  return { initializeStores };
};

export default useStores;
