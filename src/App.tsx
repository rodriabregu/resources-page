import './App.css';
import {
  Button,
  useColorMode,
  Tag,
  Heading,
  Text,
  Link,
  Box,
  Container,
  Center,
  Flex,
  VStack,
  Stack,
  HStack,
  Divider,
  StackDivider,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Heading paddingTop={'5'}>I'm a heading</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <SimpleGrid minChildWidth={'40'} spacing='10px'>
        <Box>
          <Center>
            <Tag>Bootcamps</Tag>
          </Center>
          <VStack>
            <Link>
              <LinkIcon /> SoyHenry
            </Link>
            <Link>
              <LinkIcon /> OpenBootcamp
            </Link>
            <Link>
              <LinkIcon /> Midudev Bootcamp
            </Link>
          </VStack>
        </Box>
        <Divider />
        <Box>
          <Center>
            <Tag>Videos2</Tag>
          </Center>
          <VStack>
            <Link>
              <LinkIcon /> SoyHenry2
            </Link>
            <Link>
              <LinkIcon /> OpenBootcamp2
            </Link>
            <Link>
              <LinkIcon /> Midudev Bootcamp2
            </Link>
          </VStack>
        </Box>
        <Divider />
        <Box>
          <Center>
            <Tag>Courses</Tag>
          </Center>
          <VStack>
            <Link>
              <LinkIcon /> SoyHenry
            </Link>
            <Link>
              <LinkIcon /> OpenBootcamp
            </Link>
          </VStack>
        </Box>
        <Divider />
        <Box>
          <Center>
            <Tag>Learning</Tag>
          </Center>
          <VStack>
            <Link>
              <LinkIcon /> SoyHenry
            </Link>
            <Link>
              <LinkIcon /> OpenBootcamp
            </Link>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default App;
