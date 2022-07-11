import React from 'react'
import { Flex } from '@chakra-ui/react'
import { ChildrenInt } from 'src/interfaces'

function WrapperLayout({ children }: ChildrenInt) {
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
