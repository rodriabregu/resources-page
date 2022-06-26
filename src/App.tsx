import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex } from '@chakra-ui/react'
import {
  dataAPI,
  dataBackend,
  dataBlogs,
  dataBootcamp,
  dataCheatSheet,
  dataCodeChallenges,
  dataColorPallets,
  dataFrontend,
  dataGithub,
  dataHosting,
  dataImagesPhotos,
  dataJavascript,
  dataLearning,
  dataMiscellaneous,
  dataOptimization,
  dataPrototyping,
  dataRoadmap,
  dataSolidjs,
  dataStackSolutions,
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

interface ResourceData {
  name: string
  link: string
}

const data = [
  [
    ['Learning', dataLearning],
    ['Bootcamps', dataBootcamp]
  ],
  [
    ['Backend', dataBackend],
    ['Frontend', dataFrontend]
  ],
  [
    ['Javascript', dataJavascript],
    ['Github (repositorios)', dataGithub]
  ],
  [
    ['Paleta de colores', dataColorPallets],
    ['Roadmap', dataRoadmap]
  ],
  [
    ['Code Challenges', dataCodeChallenges],
    ['Hosting', dataHosting]
  ],
  [
    ['Prototipo UI/UX', dataPrototyping],
    ['Fuentes Web', dataWebFonts]
  ],
  [
    ['Imagenes/Fotos', dataImagesPhotos],
    ['Ilustración web', dataWebIllustrations]
  ],
  [
    ['Solid.js', dataSolidjs],
    ['Cheat Sheets', dataCheatSheet]
  ],
  [
    ['Misceláneos', dataMiscellaneous],
    ['Youtube', dataYoutube]
  ],
  [
    ['APIs', dataAPI],
    ['Optimización tools', dataOptimization]
  ],
  [
    ['Blogs', dataBlogs],
    ['Stackoverflow / Respuestas', dataStackSolutions]
  ]
]

const dataTitles = data
  .flat(2)
  .map(item => typeof item === 'string' && item)
  .filter(item => item) as string[]

function App() {
  if (window.location.pathname !== '/') location.replace('/')
  return (
    <Box id="app">
      <ButtonDarkMode />
      <AlertIntro />
      <SummarySection titles={dataTitles} />
      <Flex m={'4'} align={{ md: 'center' }} direction={'column'}>
        {data.map((elem, index) => (
          <WrapperLayout key={index}>
            <ResourceLayout title={elem[0][0] as string} data={elem[0][1] as ResourceData[]} />
            {elem[1] && (
              <ResourceLayout title={elem[1][0] as string} data={elem[1][1] as ResourceData[]} />
            )}
          </WrapperLayout>
        ))}
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
