import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import Map from './Map';
import { NaverMap } from '@/types/map';
import Markers from './Markers';
import useCurrentStore from '@/hooks/useCurrentStore';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Coordinates } from '@/types/store';

const MapSection = () => {
  const router = useRouter();

  const query = useMemo(
    () => new URLSearchParams(router.asPath.slice(1)),
    [router]
  );
  const initialCenter: Coordinates = useMemo(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );
  const initialZoom: number = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    [query]
  );

  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', () => clearCurrentStore());
  };

  return (
    <>
      <Map
        initialCenter={initialCenter}
        initialZoom={initialZoom}
        onLoad={onLoadMap}
      />
      <Markers />
    </>
  );
};

export default MapSection;
