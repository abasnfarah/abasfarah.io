import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack devloper based in Minneapolis!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Abas Farah
            </Heading>
            <p>Human from Terra 1 ( Engineer / Writer / Potato )</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
          paddingTop={5}
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profilePhoto.jpeg"
            alt="Profile Photo"
          />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I'm a Software Engineer based in Minneapolis with a passion for
            building stuff. I have experience working as a full-stack developer
            at both Coinbase and Target. When I'm not building stuff, I enjoy
            reading, learning languages and playing basketball. If you want to
            see what I'm currently working on check out my{' '}
            <Link href="https://github.com/abasnfarah">Github</Link>.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Thika, Kenya.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Spent the summer Interning @ Target.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Began learning Spanish. Participated in Google's SPS program.
            Interned @ Coinbase.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Will be Interning @ TBA.
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
