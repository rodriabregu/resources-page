import { Box, Center, Flex, Text } from '@chakra-ui/react'

const AlertIntro = () => {
  return (
    <Flex justify={'center'} flexDir={{ base: 'column', md: 'row' }}>
      <Center w={{ base: '100%', md: '30%' }}>
        <Box alignItems={'center'}>
          <Text>💰 tiene contenido pago.</Text>
          <Text>🆓 tiene contenido gratuito.</Text>
          <Text>🎥 contenido de video.</Text>
          <Text>📖 contenido de lectura.</Text>
        </Box>
      </Center>
      <Center w={{ base: '100%', md: '30%' }}>
        <Text bg={'bluePrimary'} p={'1rem'} m={'6'} borderRadius={'4'}>
          Aquí encontrarás recursos de toda índole relacionada al desarrollo. Tanto contenido
          frontend, como backend, como frameworks, librerías, diseño, e inclusive sobre Job Hunting.
        </Text>
      </Center>
    </Flex>
  )
}

export default AlertIntro
