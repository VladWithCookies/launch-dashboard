
import { ReactNode } from 'react';
import { Heading, Container, Stack, Center } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Container>
      <Stack>
        <Center p={10}>
          <Heading as="h1">Moonshot Calendar Inc.</Heading>
        </Center>
        {children}
      </Stack>
    </Container>
  );
}
