import { Box, Center, Flex, Text } from '@chakra-ui/react'

const AlertIntro = () => {
  return (
    <Flex as={'header'} m={'auto'} justify={'center'} flexDir={{ base: 'column', md: 'row' }}>
      <Center m={'6'}>
        <Box alignItems={'center'}>
          <Text as={'h3'}>💰 contenido pago.</Text>
          <Text as={'h3'}>🆓 contenido gratuito.</Text>
          <Text as={'h3'}>🎥 contenido de video.</Text>
          <Text as={'h3'}>📖 contenido de lectura.</Text>
        </Box>

        <Text as={'h1'} bg={'bluePrimary'} borderRadius={'4'} p={'0.5rem'} ml={'6'}>
          Recursos de todo tipo relacionado a <strong>tecnología</strong>.
        </Text>
      </Center>
    </Flex>
  )
}

export default AlertIntro
