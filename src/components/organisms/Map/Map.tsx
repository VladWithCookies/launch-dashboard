import { map } from 'ramda';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import { GEO_API_URL } from 'constants/api';
import Marker from 'components/molecules/Marker';

interface Props {
  markers:  Marker[];
};

export default function Map({ markers }: Props) {
  return (
    <ComposableMap data-testid="map">
      <Geographies geography={GEO_API_URL}>
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
