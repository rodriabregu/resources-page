import React from 'react'
import { Flex } from '@chakra-ui/react'

interface AuxProps {
  children: React.ReactNode
}

function WrapperLayout({ children }: AuxProps) {
  return (
    <Flex
      as={'section'}
      flexDir={{
        base: 'column',
        md: 'row'
      }}>
      {children}
    </Flex>
  )
}

export default WrapperLayout
