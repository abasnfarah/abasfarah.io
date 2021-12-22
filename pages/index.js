import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack devloper based in Minneapolis!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Abas Farah
          </Heading>
          <p>Human from Terra 1 (Engineer / Writer / Entrepreneur)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
