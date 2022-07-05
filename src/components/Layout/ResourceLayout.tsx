import { useState } from 'react'
import { LinkIcon } from '@chakra-ui/icons'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Center, Collapse, Flex, Link, Tag, Text, useColorMode } from '@chakra-ui/react'

interface ResourceData {
  name: string
  link: string
}

const ResourceLayout = ({ title, data }: { title: string; data: ResourceData[] }) => {
  const { colorMode } = useColorMode()
  const [show, setShow] = useState(true)
  const settingColor = colorMode === 'light' ? 'rgba(25,0,0,0.1)' : '#27272a'
  const handleToggle = () => setShow(!show)

  const viewMoreLess = (
    <Text
      mb={'2'}
      mt={'1'}
      ml={'auto'}
      align={'center'}
      cursor={'pointer'}
      fontSize={'x-small'}
      onClick={handleToggle}>
      Ver {!show ? 'menos' : 'más'} {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </Text>
  )

  return (
    <Collapse startingHeight={50} in={!show}>
      <Box
        m={'2'}
        p={'2'}
        w={'100'}
        id={title}
        bg={settingColor}
        borderRadius={'4'}
        ml={{ base: '0', md: '2' }}
        mr={{ base: '0', md: '2' }}>
        <Center>
          <Tag>{title}</Tag>
          {viewMoreLess}
        </Center>
        <Flex m={'2'} flexDir={'column'}>
          {data.map((item, index) => (
            <Link key={index} href={item.link} target={'_blank'}>
              <Text
                m={'1'}
                noOfLines={2}
                borderRadius={'4'}
                w={{ base: '100%', md: '80' }}
                _hover={{
                  backgroundColor: colorMode === 'light' ? '#DBDBDB' : 'rgba(5,0,0,0.1)'
                }}>
                <LinkIcon /> {item.name}
              </Text>
            </Link>
          ))}
        </Flex>
        {data.length >= 10 && viewMoreLess}
      </Box>
    </Collapse>
  )
}

export default ResourceLayout
