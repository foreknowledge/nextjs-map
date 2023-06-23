import { NaverMap } from '@/types/map';
import { Coordinates } from '@/types/store';
import { useCallback } from 'react';
import { mutate } from 'swr';

export const INITIAL_CENTER: Coordinates = [37.5666805, 126.9784147];
export const INITIAL_ZOOM = 11;

export const MAP_KEY = '/map';

const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    // map을 전역 상태로 저장
    mutate(MAP_KEY, map);
  }, []);
  return { initializeMap };
};

export default useMap;
