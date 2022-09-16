import { map } from 'ramda';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import Marker from 'components/molecules/Marker';

interface Props {
  markers:  Marker[];
};

export default function Map({ markers }: Props) {
  return (
    <ComposableMap>
      <Geographies geography="/geography.json">
        {({ geographies }) => map((geography) => (
          <Geography
            key={geography.rsmKey}
            geography={geography}
          />
        ), geographies)}
      </Geographies>
      {map((marker) => <Marker key={marker.id} {...marker} />, markers)}
    </ComposableMap>
  );
}
