import { Marker } from 'react-simple-maps';
import { Tooltip } from '@chakra-ui/react';

export default function MapMarker({ name, coordinates }: Marker) {
  return (
    <Marker coordinates={coordinates}>
      <Tooltip label={name}>
        <circle
          r={10}
          fill="#F00"
          stroke="#fff"
          strokeWidth={2}
        />
      </Tooltip>
    </Marker>
  );
}
