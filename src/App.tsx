import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex } from '@chakra-ui/react'
import {
  dataBackend,
  dataBootcamp,
  dataCodeChallenges,
  dataColorPallets,
  dataFrontend,
  dataGithub,
  dataHosting,
  dataImagesPhotos,
  dataJavascript,
  dataLearning,
  dataOptimization,
  dataPrototyping,
  dataRoadmap,
  dataSolidjs,
  dataWebFonts,
  dataWebIllustrations,
  dataYoutube
} from 'data/resourcing'

import AlertIntro from 'components/AlertIntro'
import ButtonDarkMode from 'components/ButtonDarkMode'
import Footer from 'components/Footer'
import ResourceLayout from 'components/Layout/ResourceLayout'
import WrapperLayout from 'components/Layout/WrapperLayout'
import SummarySection from 'components/SummarySection'
import { scrollToSection } from 'components/ToUpScroll'

const titles: string[] = [
  'Learning',
  'Bootcamps',
  'Backend',
  'Frontend',
  'Javascript',
  'Github (repositorios)',
  'Paleta de colores',
  'Roadmap',
  'Code Challenges',
  'Hosting',
  'Prototipo UI/UX',
  'Ilustración web',
  'Imagenes/Fotos',
  'Optimización tools',
  'Solid.js',
  'Youtube'
]

function App() {
  if (window.location.pathname !== '/') location.replace('/')
  return (
    <Box id="app">
      <ButtonDarkMode />
      <AlertIntro />
      <SummarySection titles={titles} />
      <Flex m={'4'} align={{ md: 'center' }} direction={'column'}>
        <WrapperLayout>
          <ResourceLayout title={'Learning'} data={dataLearning} />
          <ResourceLayout title={'Bootcamps'} data={dataBootcamp} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Backend'} data={dataBackend} />
          <ResourceLayout title={'Frontend'} data={dataFrontend} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Javascript'} data={dataJavascript} />
          <ResourceLayout title={'Github (repositorios)'} data={dataGithub} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Code challenges'} data={dataCodeChallenges} />
          <ResourceLayout title={'Hosting'} data={dataHosting} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Paleta de colores'} data={dataColorPallets} />
          <ResourceLayout title={'Roadmap'} data={dataRoadmap} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Prototipo UI/UX'} data={dataPrototyping} />
          <ResourceLayout title={'Imagenes/Fotos'} data={dataImagesPhotos} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Ilustración web'} data={dataWebIllustrations} />
          <ResourceLayout title={'Fuentes web'} data={dataWebFonts} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Optimización tools'} data={dataOptimization} />
          <ResourceLayout title={'Solid.js'} data={dataSolidjs} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Youtube'} data={dataYoutube} />
        </WrapperLayout>
      </Flex>
      <Center>
        <Button m={'2'} onClick={() => scrollToSection('app')}>
          Up {<ArrowUpIcon />}
        </Button>
      </Center>
      <Footer />
    </Box>
  )
}

export default App
