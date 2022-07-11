import { Center, Grid, GridItem, Text, useColorMode } from '@chakra-ui/react'

import { scrollToSection } from './ToUpScroll'

export const SummarySection = ({ titles }: { titles: string[] }) => {
  const { colorMode } = useColorMode()
  const settingColor = colorMode === 'light' ? 'rgba(25,0,0,0.1)' : '#27272a'

  return (
    <>
      <Center>
        <Text m={'2'}>Glosario</Text>
      </Center>
      <Center>
        <Grid
          as={'summary'}
          templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }}
          justifyItems={'center'}
          borderRadius={'4'}
          bg={settingColor}
          gap={2}
          w={{
            base: '100%',
            md: 'auto'
          }}>
          {titles.map((title: string) => (
            <GridItem key={title} w="auto" h="10">
              <Text
                p={'2'}
                noOfLines={1}
                fontSize={'small'}
                borderRadius={'4'}
                cursor={'pointer'}
                onClick={() => scrollToSection(title)}
                _hover={{
                  backgroundColor: colorMode === 'light' ? '#DBDBDB' : 'rgba(5,0,0,0.1)'
                }}>
                {title}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Center>
    </>
  )
}
