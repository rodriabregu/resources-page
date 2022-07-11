import { Box, Center, Flex, Text } from '@chakra-ui/react'

const AlertIntro = () => {
  return (
    <Flex m={'auto'} justify={'center'} flexDir={{ base: 'column', md: 'row' }}>
      <Center m={'6'}>
        <Box alignItems={'center'}>
          <Text>💰 tiene contenido pago.</Text>
          <Text>🆓 tiene contenido gratuito.</Text>
          <Text>🎥 contenido de video.</Text>
          <Text>📖 contenido de lectura.</Text>
        </Box>

        <Text bg={'bluePrimary'} borderRadius={'4'} p={'0.5rem'} ml={'6'}>
          Recursos de todo tipo relacionado a <strong>tecnología</strong>.
        </Text>
      </Center>
    </Flex>
  )
}

export default AlertIntro
