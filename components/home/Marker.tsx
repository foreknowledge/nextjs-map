import { Marker } from '@/types/map';
import { useEffect } from 'react';

const Marker = ({ map, coordinates, icon, onClick }: Marker) => {
  useEffect(() => {
    let marker: naver.maps.Marker | undefined;

    if (map) {
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(...coordinates),
        map,
        icon,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
};

export default Marker;
