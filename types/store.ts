type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type Store = {
  nid: number;
  season: number;
  episode: number;
  characteristic: string;
  name: string;
  coordinates: Coordinates;
  foodKind: string;
  address: string;
  phone: string;
  images: string[];
  description: string;
  menus: Menu[];
};

type Menu = {
  name: string;
  price: string;
};
