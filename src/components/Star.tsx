import React from 'react'
import { Center, Link, Text } from '@chakra-ui/react'

export function Star() {
  const [star, setStar] = React.useState(0)

  React.useEffect(() => {
    fetch('https://api.github.com/repos/rodriabregu/resource-page')
      .then(res => res.json())
      .then(res => setStar(res.stargazers_count))
  }, [])

  return (
    <Center as={'header'}>
      <Link m={{ md: -5 }} isExternal href="https://github.com/rodriabregu/resource-page">
        <Text
          as={'span'}
          bg={'bluePrimary'}
          p={'0.5rem'}
          m={'4'}
          borderRadius={'4'}
          fontSize={'xl'}>
          Apoya a este repo 🌟 {star}
        </Text>
      </Link>
    </Center>
  )
}

export default Star
