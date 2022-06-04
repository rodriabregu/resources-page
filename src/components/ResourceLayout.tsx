import {
  Box,
  Text,
  Center,
  Flex,
  Link,
  Tag,
  useColorMode,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

interface ResourceData {
  name: string;
  link: string;
}

const ResourceLayout = ({
  title,
  data,
}: {
  title: string;
  data: ResourceData[];
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box p={'2'} bg={'rgba(25,0,0,0.1)'} borderRadius={'4'}>
      <Center>
        <Tag>{title}</Tag>
      </Center>
      <Flex m={'2'} flexDir={'column'}>
        {data.map((item, index) => (
          <Box key={index}>
            <Link href={item.link} target={'_blank'}>
              <Text
                m={'1'}
                borderRadius={'4'}
                bg={colorMode === 'light' ? '#DBDBDB' : '#2A2A2A'}
                noOfLines={2}
              >
                <LinkIcon /> {item.name}
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ResourceLayout;
