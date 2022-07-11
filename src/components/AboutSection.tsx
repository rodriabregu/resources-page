import { Container, Heading, Text } from '@chakra-ui/react'

export function AboutSection() {
  return (
    <Container as={'details'} maxW={'3xl'} m={'auto'} my={'10'}>
      <Text bg={'bluePrimary'} p={'1rem'} borderRadius={'4'}>
        <Heading as={'h3'} size={'md'} mb={'2'}>
          Próposito de esta página:
        </Heading>
        Encontrarás recursos de toda índole relacionada al desarrollo. Tanto contenido frontend,
        como backend, como frameworks, librerías, diseño, e inclusive sobre Job Hunting.
        <br />
        El objetivo de todo esto, es la verdadera divulgación de conocimiento de manera totalmente
        gratuita y accesible para todos.
      </Text>
    </Container>
  )
}
