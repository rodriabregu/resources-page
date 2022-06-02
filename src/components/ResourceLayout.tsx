import React from 'react';
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
  Wrap,
  WrapItem,
  GridItem,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

const ResourceLayout = () => {
  return (
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
        <Link>
          <LinkIcon /> Midudev Bootcamp
        </Link>
        <Link>
          <LinkIcon /> Coderhouse
        </Link>
      </VStack>
    </Box>
  );
};

export default ResourceLayout;
