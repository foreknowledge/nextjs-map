import { NaverMap } from '@/types/map';
import { Coordinates } from '@/types/store';
import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';

export const INITIAL_CENTER: Coordinates = [37.5666805, 126.9784147];
export const INITIAL_ZOOM = 11;

export const MAP_KEY = '/map';

const useMap = () => {
  const { data: map } = useSWR(MAP_KEY);

  const initializeMap = useCallback((map: NaverMap) => {
    // map을 전역 상태로 저장
    mutate(MAP_KEY, map);
  }, []);

  const resetMapOptions = useCallback(() => {
    map.morph(INITIAL_CENTER, INITIAL_ZOOM);
  }, [map]);

  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom: number = map.getZoom();

    return { center, zoom };
  }, [map]);

  return { initializeMap, resetMapOptions, getMapOptions };
};

export default useMap;
