import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDotfiles from '../public/images/project-dotfiles.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dotfiles" title="Dotfiles" thumbnail={thumbDotfiles}>
            Dotfiles for Vim, Zsh, and Tmux. Installs on Arch and MacOSX.
            </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
