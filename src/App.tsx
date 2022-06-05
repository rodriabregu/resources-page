import {
  useColorMode,
  GridItem,
  Center,
  Button,
  Grid,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import AlertIntro from './components/AlertIntro';

import ResourceLayout from './components/ResourceLayout';
import {
  dataGithub,
  dataFrontend,
  dataBackend,
  dataRoadmap,
  dataJavascript,
  dataLearning,
  dataBootcamp,
} from './data/example';

const titles = [
  'Bootcamps',
  'Github',
  'Roadmap',
  'Frontend',
  'Backend',
  'Javascript',
  'Learning',
];

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const settingTheme = colorMode !== 'light' ? 'Light' : 'Dark';
  const settingColor = colorMode === 'light' ? 'rgba(25,0,0,0.1)' : '#27272a';

  const scrollToSection = (title: string) =>
    (document.getElementById(title) as HTMLDivElement).scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <Box>
      <Center>
        <Button m={'4'} onClick={toggleColorMode}>
          Toggle {settingTheme}
        </Button>
      </Center>
      
      <AlertIntro />

      <Center>
        <Grid
          templateColumns='repeat(4, 1fr)'
          justifyItems={'center'}
          borderRadius={'4'}
          bg={settingColor}
          gap={2}
          w={{ base: '100%', md: 'auto' }}
        >
          {titles.map((title) => (
            <GridItem w='auto' h='10'>
              <Text
                key={title}
                borderRadius={'4'}
                cursor={'pointer'}
                m={'1'}
                p={'1'}
                onClick={() => scrollToSection(title)}
                _hover={{
                  backgroundColor:
                    colorMode === 'light' ? '#DBDBDB' : 'rgba(5,0,0,0.1)',
                }}
              >
                {title}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Center>

      <Flex
        // p={'4'}
        // m={'4'}
        // display={'inline-block'}
        // display={'table'}
        // w={'100%'}
        // w={'80vw'}
        align={'center'}
        direction={'column'}
      >
        <Flex flexDir={{ base: 'column', md: 'row' }}>
          <ResourceLayout title={'Learning'} data={dataLearning} />
          <ResourceLayout title={'Javascript'} data={dataJavascript} />
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }}>
          <ResourceLayout title={'Javascript'} data={dataJavascript} />
          <ResourceLayout title={'Javascript'} data={dataJavascript} />
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }}>
          <ResourceLayout title={'Bootcamps'} data={dataBootcamp} />
          <ResourceLayout title={'Github'} data={dataGithub} />
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }}>
          <ResourceLayout title={'Assets'} data={dataBootcamp} />
          <ResourceLayout title={'Roadmap'} data={dataRoadmap} />
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }}>
          <ResourceLayout title={'Backend'} data={dataBackend} />
          <ResourceLayout title={'Frontend'} data={dataFrontend} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
