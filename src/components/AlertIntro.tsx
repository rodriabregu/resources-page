import { Box, Center, Text, useColorMode } from '@chakra-ui/react';

const AlertIntro = () => {
  const { colorMode } = useColorMode();
  const settingColor = colorMode === 'light' ? 'rgba(25,0,0,0.1)' : '#27272a';
  return (
    <>
      <Center>
        <Box as='strong'>
          <Text>💰 significa que tiene contenido pago.</Text>
          <Text>🆓 significa que tiene contenido gratuito.</Text>
        </Box>
      </Center>
      <Center>
        <Text
          w={'70vw'}
          bg={settingColor}
          p={'1rem'}
          m={'6'}
          borderRadius={'4'}
        >
          Aquí encontrarás recursos de absolutamente toda índole, relacionada al
          desarrollo. Tanto contenido frontend, como backend, como frameworks,
          librerías, diseño, e inclusive sobre Job Hunting.
        </Text>
      </Center>
    </>
  );
};

export default AlertIntro;
