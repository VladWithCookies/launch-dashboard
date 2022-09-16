
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Container, Stack, Center } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Container>
      <Stack>
        <Center p={10}>
          <Link to="/">
            <Heading as="h1">Test Task Boilerplate</Heading>
          </Link>
        </Center>
        {children}
      </Stack>
    </Container>
  );
}
