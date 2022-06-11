import { Box, Flex } from '@chakra-ui/react'
import {
  dataBackend,
  dataBootcamp,
  dataFrontend,
  dataGithub,
  dataJavascript,
  dataLearning,
  dataRoadmap
} from 'data/example'

import AlertIntro from 'components/AlertIntro'
import ButtonDarkMode from 'components/ButtonDarkMode'
import ResourceLayout from 'components/Layout/ResourceLayout'
import WrapperLayout from 'components/Layout/WrapperLayout'
import SummarySection from 'components/SummarySection'

function App() {
  return (
    <Box>
      <ButtonDarkMode />
      <AlertIntro />
      <SummarySection />
      <Flex m={'4'} align={{ md: 'center' }} direction={'column'}>
        <WrapperLayout>
          <ResourceLayout title={'Learning'} data={dataLearning} />
          <ResourceLayout title={'Javascript'} data={dataJavascript} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Javascript'} data={dataJavascript} />
          <ResourceLayout title={'Javascript'} data={dataJavascript} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Bootcamps'} data={dataBootcamp} />
          <ResourceLayout title={'Github'} data={dataGithub} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Assets'} data={dataBootcamp} />
          <ResourceLayout title={'Roadmap'} data={dataRoadmap} />
        </WrapperLayout>

        <WrapperLayout>
          <ResourceLayout title={'Backend'} data={dataBackend} />
          <ResourceLayout title={'Frontend'} data={dataFrontend} />
        </WrapperLayout>
      </Flex>
    </Box>
  )
}

export default App
