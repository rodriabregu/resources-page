import { Container, Heading, Text } from '@chakra-ui/react'

export function AboutSection() {
  return (
    <Container as={'article'} maxW={'3xl'} m={'auto'} my={'6'}>
      <Text bg={'bluePrimary'} p={'1rem'} borderRadius={'4'}>
        <Heading as={'h3'} size={'md'} mb={'2'}>
          Próposito de esta página:
        </Heading>
        Recursos de toda índole relacionada al desarrollo. Tanto contenido frontend, como backend,
        frameworks, librerías, diseño, e inclusive sobre Job Hunting.
        <br />
        El objetivo de todo esto, es la verdadera divulgación del conocimiento de manera totalmente
        gratuita y accesible para todos.
      </Text>
    </Container>
  )
}
