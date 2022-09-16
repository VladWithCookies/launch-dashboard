import { useMemo } from 'react';
import { formatISO, add } from 'date-fns';
import { pipe, map, propOr } from 'ramda';
import { useQuery } from '@tanstack/react-query';
import { Center, Spinner } from '@chakra-ui/react';

import { ENDPOINTS } from 'constants/api';
import { getLaunches } from 'api';
import Map from 'components/organisms/Map';
import MainLayout from 'components/templates/MainLayout';

export default function Home() {
  const startDate = formatISO(new Date());
  const endDate = formatISO(add(new Date(), { weeks: 3 }));

  const { isLoading, data } = useQuery(
    [ENDPOINTS.LAUNCH, startDate, endDate],
    () => getLaunches({ startDate, endDate })
  );

  const markers = useMemo(() => pipe<[Data], Result[], Marker[]>(
    propOr([], 'results'),
    map(({ id, name, pad: { latitude, longitude } }: Result) => ({
      id,
      name,
      coordinates: [Number(longitude), Number(latitude)],
    }))
  )(data), [data]);

  return (
    <MainLayout>
      <Center h="400px">
        {isLoading ? <Spinner size="xl" /> : <Map markers={markers} />}
      </Center>
    </MainLayout>
  );
}
