interface Marker {
  id: string;
  name: string;
  coordinates: [number, number];
}

interface Pad {
  latitude: string;
  longitude: string;
};

interface Result {
  id: string;
  name: string;
  pad: Pad;
};

interface Data {
  results: Result[];
};
