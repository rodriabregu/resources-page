import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { data, dataTitles } from 'data/data'
import { ResourceData } from 'src/interfaces'

import { AboutSection } from 'components/AboutSection'
import AlertIntro from 'components/AlertIntro'
import ButtonDarkMode from 'components/ButtonDarkMode'
import Footer from 'components/Footer'
import ResourceLayout from 'components/Layout/ResourceLayout'
import WrapperLayout from 'components/Layout/WrapperLayout'
import { Star } from 'components/Star'
import { SummarySection } from 'components/SummarySection'
import { scrollToSection } from 'components/ToUpScroll'

function App() {
  return (
    <>
      <Box maxW={'3xl'} m={'auto'} id="app">
        <ButtonDarkMode />
        <Star />
        <AlertIntro />
        <SummarySection titles={dataTitles} />
        <Flex m={'4'} align={{ md: 'center' }} direction={'column'}>
          {data.map(([elemA, elemB], index) => (
            <WrapperLayout key={index}>
              <ResourceLayout title={elemA[0] as string} data={elemA[1] as ResourceData[]} />
              {elemB && (
                <ResourceLayout title={elemB[0] as string} data={elemB[1] as ResourceData[]} />
              )}
            </WrapperLayout>
          ))}
        </Flex>
        <AboutSection />
        <Center>
          <Button mb={'2'} onClick={() => scrollToSection('app')}>
            Up {<ArrowUpIcon />}
          </Button>
        </Center>
      </Box>
      <Footer />
    </>
  )
}

export default App
