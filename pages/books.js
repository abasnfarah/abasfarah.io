import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const Books = () => {
  return (
    <Container>
      <Heading as="h2">Work in Progress</Heading>
      <Text paddingTop={5}>
        Currently working on this page. Click below to see what I&apos;m
        reading.
      </Text>

      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="https://www.goodreads.com/user/show/88493203-abas">
          <Button colorScheme="teal">My Goodreads</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Books
